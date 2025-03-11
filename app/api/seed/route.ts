import { NextResponse } from 'next/server';
import slugify from 'slugify';

import { CATEGORIES, POSTS } from '@/lib/data/constant';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("🔄 Début du peuplement de la base de données...");

    // Suppression des anciennes données
    await prisma.postCategory.deleteMany();
    await prisma.post.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany(); // Si nécessaire

    // Ajout des catégories
    console.log("🗂 Ajout des catégories...");
    await prisma.category.createMany({
      data: CATEGORIES.map((category) => ({
        title: category.title || "",
        slug: category.slug || "",
      })),
    });

    // Récupération des catégories insérées
    const categories = await prisma.category.findMany();
    const categoryMap = Object.fromEntries(
      categories.map((cat) => [cat.slug, cat.id])
    );

    // Ajout des articles et de la relation M:N dans `PostCategory`
    console.log("📝 Ajout des articles...");
    await Promise.all(
      POSTS.map(async (post, index) => {
        const postSlug = slugify(`${post.title}-${index}`,{lower:true});

        // Sélection aléatoire de 1 à 3 catégories
        const randomCategories = CATEGORIES.toSorted(() => 0.5 - Math.random()) // Mélange aléatoire
          .slice(0, Math.floor(Math.random() * 3) + 1) // Prend entre 1 et 3 catégories
          .map((cat) => categoryMap[cat.slug as keyof typeof categoryMap])
          .filter(Boolean); // Filtrer les catégories inexistantes

        if (randomCategories.length === 0) {
          console.error(
            `❌ Erreur: Aucune catégorie valide pour '${post.title}'.`
          );
          throw new Error(`Aucune catégorie trouvée pour '${post.title}'`);
        }

        // Création du post
        const createdPost = await prisma.post.create({
          data: {
            title: post.title,
            slug: postSlug,
            content: post.content,
            image: post.image,
            nbViews: post.nbViews,
            nbComments: post.nbComments,
            // Assigner l'utilisateur par défaut
            author: {
              create: {
                name: post.author?.name,
                email: post.author?.email,
              },
            },
          },
        });

        // Création des relations M:N dans `PostCategory`
        await prisma.postCategory.createMany({
          data: randomCategories.map((categoryId) => ({
            postId: createdPost.id,
            categoryId: categoryId,
          })),
        });
      })
    );

    console.log("✅ Peuplement terminé !");
    return NextResponse.json({
      message: "Base de données remplie avec succès !",
    });
  } catch (error: any) {
    console.error("❌ Erreur lors du peuplement de la base :", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

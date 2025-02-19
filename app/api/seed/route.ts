import { NextResponse } from 'next/server';

import { CATEGORIES, POSTS } from '@/lib/data/constant';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("🔄 Début du peuplement de la base de données...");

    // Suppression des anciennes données
    await prisma.post.deleteMany();
    await prisma.category.deleteMany();

    // Ajout des catégories
    console.log("🗂 Ajout des catégories...");
    const categories = await prisma.$transaction(
      CATEGORIES.map((category) =>
        prisma.category.create({
          data: {
            title: category.name || "",
            slug: category.slug || "",
          },
        })
      )
    );

    // Création d'une map slug <-> nom de catégorie
    const categoryMap = Object.fromEntries(
      categories.map((c) => [c.title.toLowerCase(), c.slug])
    );

    // Ajout des articles
    console.log("📝 Ajout des articles...");
    await prisma.$transaction(
      POSTS.map((post) => {
        const categorySlug = categoryMap[post.category?.toLowerCase() || ""];
        
        if (!categorySlug) {
          console.error(`❌ Catégorie introuvable pour ${post.title}: ${post.category}`);
          throw new Error(`Catégorie '${post.category}' introuvable`);
        }

        return prisma.post.create({
          data: {
            title: post.title,
            slug: post.slug,
            content: post.content,
            image: post.image,
            nbViews: post.nbViews,
            nbComments: post.nbComments,
            createdAt: new Date(post.date || ""),
            category: {
              connect: { slug: categorySlug }
            }
          },
        });
      })
    );

    console.log("✅ Peuplement terminé !");
    return NextResponse.json({ message: "Base de données remplie avec succès !" });
  } catch (error:any) {
    console.error("❌ Erreur lors du peuplement de la base :", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

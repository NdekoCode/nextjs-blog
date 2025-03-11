import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { getAuthSession } from '@/lib/constants/auth-options';
import { IPostDto } from '@/lib/schemas/dto/post.dto';
import { postsSchema } from '@/lib/schemas/post.schema';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get("category") || undefined;

    const posts = await prisma.post.findMany({
      where: categorySlug
        ? {
            categories: {
              some: {
                category: { slug: categorySlug },
              },
            },
          }
        : {},
      include: {
        categories: {
          include: { category: true }, // Récupérer les catégories associées
        },
      },
    });
    const formattedPosts = posts.map((post) => ({
      ...post,
      categories: post.categories.map((c) => c.category),
    }));
    // Validation avec Zod après transformation
    const data = postsSchema.parse(formattedPosts);
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, stack: error.stack },
      { status: 500 }
    );
  }
};

/**
 * Crée un nouveau post avec les catégories associées
 * @param req - La requête HTTP
 * @returns Le post créé
 * les étapes algorithmiques pour la création d'un post dans votre API. Voici le processus étape par étape :
1. Vérification de l'authentification
 - Vérifie si l'utilisateur est connecté
 - Si l'utilisateur n'est pas connecté, renvoie une erreur 401
2. Récupération et validation des donnée du corps de la requête
 - Récupère les données du corps de la requête
 - Extrait les champs nécessaires
 - Vérifie que tous les champs obligatoires sont présents
 - Si non, renvoie une erreur 400
 3. Vérification de l'unicité du slug
  - Vérifie si un post avec le même slug existe déjà
  - Si oui, renvoie une erreur 400
 4. Vérification de la validité des catégories et de l'existence des catégories
  - Vérifie que `categories` est un tableau non vide
  - Si non, renvoie une erreur 400
  - Vérifie que toutes les catégories demandées existent dans la base de données
  - Si non, renvoie une erreur 404
 5. Création du post
  - Crée le post avec les données fournies (Crée le post avec les catégories associées)
  - Initialise les compteurs (nbViews, nbComments)
  - Associe les catégories au post
  - Inclut les catégories dans la réponse
6. Envoi de la réponse
  - Retourne le post créé avec ses catégories associées
  - Retourne un code de statut 201 (Created) pour indiquer que le post a été créé avec succès
7. Gestion des erreurs
  - Capture et gère toutes les erreurs potentielles
  - Si une erreur survient, renvoie une erreur 500 avec les détails
  - Si une erreur survient, capture et gère toutes les erreurs potentielles
 */
export const POST = async (req: NextRequest) => {
  // 1. Vérification de l'authentification
  const session = await getAuthSession();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 2. Récupération et validation des donnée du corps de la requête
    const body = (await req.json()) as IPostDto;
    const { title, content, slug, categories: categoryIds, image } = body;

    // Vérifier que les champs obligatoires sont fournis
    if (!title || !content || !slug || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Vérification de l'unicité du slug
    // Vérifier si le post existe déjà
    const findPost = await prisma.post.findUnique({ where: { slug } });
    if (findPost) {
      return NextResponse.json(
        { error: "Post already exists" },
        { status: 400 }
      );
    }

    // 4. Vérification de la validité des catégories et de l'existence des catégories
    // Vérifier que `categories` est un tableau valide
    if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
      return NextResponse.json(
        { error: "Categories must be a non-empty array" },
        { status: 400 }
      );
    }

    // Vérifier si les catégories existent dans la base de données
    const existingCategories = await prisma.category.findMany({
      where: { id: { in: categoryIds } }, // "Trouve toutes les catégories dont l'ID est dans le tableau categoryIds", donc si categoryIds = [1, 2, 3], alors il va chercher les catégories avec les id 1, 2 et 3
    });

    if (existingCategories.length !== categoryIds.length) {
      return NextResponse.json(
        { error: "One or more categories not found" },
        { status: 404 }
      );
    }

    // 5. Création du post
    // On upload l'image
    
    // Créer le post avec les catégories associées
    const post = await prisma.post.create({
      data: {
        slug,
        title,
        content,
        image: image as string,
        nbViews: 0,
        nbComments: 0,
        userEmail: session.user.email as string,
        categories: {
          // "Crée une relation entre le post et les catégories existantes", donc si existingCategories = [cat1, cat2, cat3], alors il va créer une relation entre le post et les catégories cat1, cat2 et cat3
          create: existingCategories.map((category) => ({
            category: { connect: { id: category.id } },
          })),
        },
      },
      include: {
        // "Retourne les catégories liées au post", donc si post = {id: 1, title: "Post 1", categories: [cat1, cat2, cat3]}, alors il va retourner les catégories cat1, cat2 et cat3
        categories: { include: { category: true } }, // Retourner les catégories liées
      },
    });

    // 6. Envoi de la réponse
    return NextResponse.json(post, { status: 201 });

    // 7. Gestion des erreurs
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create post", details: error.message },
      { status: 500 }
    );
  }
};

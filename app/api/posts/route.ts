import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { getAuthSession } from '@/lib/constants/auth-options';
import { IPostDto } from '@/lib/schemas/dto/post.dto';

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

    return NextResponse.json(posts, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, stack: error.stack },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as IPostDto;
    const { title, content, slug, categories: categoryIds } = body;

    // Vérifier que les champs obligatoires sont fournis
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Vérifier si le post existe déjà
    const findPost = await prisma.post.findUnique({ where: { slug } });
    if (findPost) {
      return NextResponse.json(
        { error: "Post already exists" },
        { status: 400 }
      );
    }

    // Vérifier que `categories` est un tableau valide
    if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
      return NextResponse.json(
        { error: "Categories must be a non-empty array" },
        { status: 400 }
      );
    }

    // Vérifier si les catégories existent dans la base de données
    const existingCategories = await prisma.category.findMany({
      where: { id: { in: categoryIds } },
    });

    if (existingCategories.length !== categoryIds.length) {
      return NextResponse.json(
        { error: "One or more categories not found" },
        { status: 404 }
      );
    }

    // Créer le post avec les catégories associées
    const post = await prisma.post.create({
      data: {
        slug,
        title,
        content,
        nbViews: 0,
        nbComments: 0,
        userEmail: session.user.email as string,
        categories: {
          create: existingCategories.map((category) => ({
            category: { connect: { id: category.id } },
          })),
        },
      },
      include: {
        categories: { include: { category: true } }, // Retourner les catégories liées
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create post", details: error.message },
      { status: 500 }
    );
  }
};

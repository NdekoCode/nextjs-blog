export const getCategories = async (categorySlug: string) => {
  try {
    const category = await prisma?.category.findUnique({
      where: {
        slug: categorySlug,
      },
      include: {
        posts: {
          include: {
            post: true,
          },
        },
      },
    });
    if (!category) return null;
    const formattedCategory = {
      ...category,
      posts: category.posts.map((p) => p.post),
    };
    return formattedCategory;
  } catch (error) {
    throw new Error("Failed to get categories");
  }
};

export const getCategories = async (categorySlug: string) => {
  try {
    const category = await prisma?.category.findUnique({
      where: {
        slug: categorySlug,
      },
      include: {
        posts: true,
      },
    });
    return category;
  } catch (error) {
    throw new Error("Failed to get categories");
  }
};

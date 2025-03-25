import PostCategoryList from '@/components/pages/home/PostCategoryList';
import { getCategories } from '@/lib/services/category.service';

export const generateStaticParams = async () => {
  try {
    const categories = await getCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug ?? "";
  return <PostCategoryList slug={slug} />;
};

export default CategoriesPage;

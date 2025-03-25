import PostCategoryList from '@/components/pages/home/PostCategoryList';
import { getCategories } from '@/lib/services/category.service';

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
};
const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug ?? "";
  return <PostCategoryList slug={slug} />;
};

export default CategoriesPage;

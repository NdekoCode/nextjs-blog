const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return <div>{params.slug.split('-').join(' ').toUpperCase()}</div>;
};

export default CategoriesPage;

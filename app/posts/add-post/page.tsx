import RequireAuth from '@/components/auth/RequireAuth';
import PageTitle from '@/components/PageTitle';

const page = () => {
  return (
    <RequireAuth>
      <PageTitle title="Add Post" />
    </RequireAuth>
  );
};

export default page;

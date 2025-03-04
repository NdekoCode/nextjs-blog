import RequireAuth from '@/components/auth/RequireAuth';
import PageTitle from '@/components/PageTitle';
import WritePostForm from '@/components/posts/WritePostForm';

const page = () => {
  return (
    <RequireAuth>
      <div className="flex flex-col gap-y-10 mt-10">
        <PageTitle title="Add Post" />
        <WritePostForm />
      </div>
    </RequireAuth>
  );
};

export default page;

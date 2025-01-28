import { FC } from 'react';

const PageTitle: FC<{ title?: string }> = ({ title }) => {
  return (
    <h1 className="capitalize text-3xl font-bold sm:text-4xl text-center text-pretty md:text-5xl text-black dark:text-white">
      {title}
    </h1>
  );
};

export default PageTitle;

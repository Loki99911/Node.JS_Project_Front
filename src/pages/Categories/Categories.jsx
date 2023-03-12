import { CategoryList } from 'components/CategoryList/CategoryList';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <Title>Category</Title>
      <CategoryList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Categories;

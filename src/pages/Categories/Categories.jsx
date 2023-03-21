import { CategoryList } from 'components/CategoryList/CategoryList';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <Container>
        <Title>Categories</Title>
        <CategoryList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default Categories;

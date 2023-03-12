import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import ShopingTabl from 'components/ShoppingTabl/ShoppingTabl';

const ShopingList = () => {
  return (
    <>
      <Container>
        <Title>Shopping list</Title>
        <ShopingTabl/>
      </Container>
    </>
  );
};

export default ShopingList;

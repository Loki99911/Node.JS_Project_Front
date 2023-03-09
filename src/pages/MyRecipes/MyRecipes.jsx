import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContentWrapper } from './MyRecipes.styled';

const MyRecipes = () => {
  return (
    <>
      <Container>
        <Title>Favorites</Title>
        <ContentWrapper></ContentWrapper>
      </Container>
    </>
  );
};

export default MyRecipes;

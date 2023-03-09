import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContentWrapper, Wrapper } from './Favorites.styled';
import img from '../../images/default.jpg';
import { RecipeBlock } from 'components/RecipeBlock/RecipeBlock';

const Favorites = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Favorites</Title>
        <ContentWrapper>
          <RecipeBlock
            location="favorite"
            img={img}
            title="Salmon Eggs Benedict"
            text={
              <span>
                Salmon eggs are rich in essential nutrients, low in calories,
                and recommended as part of a healthy diet. Including salmon in a
                balanced diet can help decrease the chances of heart disease,
                ease inflammation, and more. <br />
                Studies have shown a number of potential health benefits to
                seafood rich in omega-3 fatty acids, which include salmon eggs.
              </span>
            }
            time="20 min"
          />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Favorites;

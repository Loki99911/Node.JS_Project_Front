import { Container } from 'components/Container/Container';
import { RecipeBlock } from 'components/RecipeBlock/RecipeBlock';
import { Title } from 'components/Title/Title';
import { ContentWrapper } from './MyRecipes.styled';

import img from '../../images/default.jpg';

const MyRecipes = () => {
  return (
    <>
      <Container>
        <Title>My recipes</Title>
        <ContentWrapper>
          <RecipeBlock
            location="recipes"
            img={img}
            title="Salmon Eggs Benedict"
            text="Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. 
Studies have shown a number of potential health benefits to seafood rich in omega-3 fatty acids, which include salmon eggs."
            time="20 min"
          />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default MyRecipes;

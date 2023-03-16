import {
  ImageWrapper,
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionText,
  InstructionList,
} from './RecipePreparation.styled';

const RecipePreparation = ({ image, instructions }) => {
  const items = instructions
    .split('\r\n')
    .filter(elem => {
      if (!elem) return false;
      if (!isNaN(elem)) return false;
      if (elem.toLowerCase().includes('step')) return false;
      return true;
    })
    .map((item, index) => {
      return (
        <InstructionText key={item}>
          <span>{index + 1}</span>
          <p>{item}</p>
        </InstructionText>
      );
    });

  return (
    <PreparationWrapper>
      <InstructionWrapper>
        <InstructionTitle>Recipe Preparation</InstructionTitle>
        <InstructionList>{items}</InstructionList>
      </InstructionWrapper>
      <ImageWrapper>
        <img src={image} alt="ImgText" />
      </ImageWrapper>
    </PreparationWrapper>
  );
};

export default RecipePreparation;

import {
  ImageWrapper,
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionText,
} from './RecipePreparation.styled';

const RecipePreparation = ({ image, instructions }) => {
  return (
    <PreparationWrapper>
      <InstructionWrapper>
        <InstructionTitle>Recipe Preparation</InstructionTitle>
        <InstructionText>{instructions}</InstructionText>
      </InstructionWrapper>
      <ImageWrapper>
        <img src={image} alt="ImgText"/>
      </ImageWrapper>
    </PreparationWrapper>
  );
};

export default RecipePreparation;

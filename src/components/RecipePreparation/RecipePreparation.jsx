import {
  ImageWrapper,
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionText,
  InstructionList,
} from './RecipePreparation.styled';

const RecipePreparation = ({ image, instructions }) => {
  const items = instructions.split('\r\n').map((item, index) => (
    <InstructionText key={item}>
      <span>{index + 1}</span>
      <p>{item}</p>
    </InstructionText>
  ));

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

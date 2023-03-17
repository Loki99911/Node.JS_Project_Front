import {
  ImageWrapper,
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionText,
  InstructionList,
} from './RecipePreparation.styled';

import { nanoid } from 'nanoid';

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
      let slicedItem = item;
      for (let i = 0; i < 2; i++) {
        if (!isNaN(slicedItem[i]) || slicedItem[i] === '.') {
          slicedItem = slicedItem.slice(i + 1);
        }
      }
      return (
        <InstructionText key={nanoid()}>
          <span>{index + 1}</span>
          <p>{slicedItem}</p>
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

import {
  RecipeItem,
  ImageWrapper,
  Label,
  RealCheckbox,
  CustomCheckbox,
  IngNumber,
  TextContainer,
  IngName,
} from './RecipeInngredientsItem.styled';
import sprite from '../../images/sprite.svg';

const RecipeInngredientsItem = ({
  image,
  name,
  desription,
  weight,
  checked,
}) => {
  return (
    <>
      <RecipeItem>
        <Label>
          <ImageWrapper>
            <img src={image} alt={name} />
          </ImageWrapper>
          <TextContainer>
            <IngName>{name}</IngName>
          </TextContainer>
          <IngNumber>{weight}</IngNumber>
          <RealCheckbox type="checkbox" />
          <CustomCheckbox>
            <svg>
              <use href={sprite + `#icon-pick`} />
            </svg>
          </CustomCheckbox>
        </Label>
      </RecipeItem>
    </>
  );
};

export default RecipeInngredientsItem;

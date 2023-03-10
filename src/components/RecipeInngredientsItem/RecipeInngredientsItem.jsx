import { RecipeItem, ImageWrapper, Label, RealCheckbox, CustomCheckbox } from "./RecipeInngredientsItem.styled";
import sprite from '../../images/sprite.svg';
const RecipeInngredientsItem = ({image, name, desription, weight, checked }) => {
  return (
    <>
      <RecipeItem>
        <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
        <p>{name}</p>
        <Label>
          <RealCheckbox type="checkbox" checked={false}/>
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
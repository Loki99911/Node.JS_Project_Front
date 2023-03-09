import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useMediaQuery } from 'hooks/useMedia';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import {
  DataWrapper,
  DescrWrapper,
  ImageWrapper,
  RecipeBlockWrapper,
  Time,
  TimeWrapper,
  TitleWrapper,
} from './RecipeBlock.styled';

export const RecipeBlock = ({ location, id, text, title, img, time }) => {
  const isRowBased = useMediaQuery('(min-width: 768px)');
  const handleRecipeBtnClick = () => {
    console.log(id);
  };
  return (
    <RecipeBlockWrapper key={id} location={location}>
      <ImageWrapper location={location}>
        <img src={img} alt={title} />
      </ImageWrapper>
      <DataWrapper location={location}>
        <TitleWrapper>
          <SubTitle text={title} />
          {isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} />
          )}
          {location === 'recipes' && <DeleteBtn location={location} />}
        </TitleWrapper>
        <DescrWrapper>
          <p>{text}</p>
        </DescrWrapper>
        <TimeWrapper>
          <Time>{time}</Time>
          {!isRowBased && location === 'recipes' && (
            <ButtonSkew
              type="button"
              text="See recipe"
              fn={handleRecipeBtnClick}
              styled="olive"
            />
          )}
          {!isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} />
          )}
          {isRowBased && (
            <ButtonSkew
              type="button"
              text="See recipe"
              fn={handleRecipeBtnClick}
              styled={location === 'favorite' ? 'black' : 'olive'}
            />
          )}
        </TimeWrapper>
      </DataWrapper>
    </RecipeBlockWrapper>
  );
};

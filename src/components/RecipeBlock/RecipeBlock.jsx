import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useMediaQuery } from 'hooks/useMedia';

import {
  DataWrapper,
  DescrWrapper,
  ImageWrapper,
  RecipeBlockWrapper,
  Time,
  TimeWrapper,
  TitleWrapper,
} from './RecipeBlock.styled';
import { NavLinkSkew } from 'components/NavLinkSkew/NavLinkSkew';

export const RecipeBlock = ({ location, id, text, title, img, time }) => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  return (
    <RecipeBlockWrapper location={location}>
      <ImageWrapper location={location}>
        <img src={img} alt={title} />
      </ImageWrapper>
      <DataWrapper location={location}>
        <TitleWrapper>
          <SubTitle text={title} />
          {isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} id={id} />
          )}
          {location === 'recipes' && <DeleteBtn location={location} />}
        </TitleWrapper>
        <DescrWrapper>{text}</DescrWrapper>
        <TimeWrapper>
          <Time>{time}</Time>
          {!isRowBased && location === 'recipes' && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled="olive"
            />
          )}
          {!isRowBased && location === 'favorite' && (
            <DeleteBtn location={location} id={id} />
          )}
          {isRowBased && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled={location === 'favorite' ? 'black' : 'olive'}
            />
          )}
        </TimeWrapper>
      </DataWrapper>
    </RecipeBlockWrapper>
  );
};

import { Navi, StyledLink } from './HeaderNav.styled';
import sprite from '../../../images/sprite.svg';

export const HeaderNav = () => {
  return (
    <Navi>
      <StyledLink to="/categories">Categories</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorites</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
      <StyledLink to="/search">
        <svg>
          <use href={sprite + `#search`} />
        </svg>
        <span>Search</span>
      </StyledLink>
    </Navi>
  );
};

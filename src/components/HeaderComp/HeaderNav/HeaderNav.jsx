import { Navi, StyledLink } from './HeaderNav.styled';
import sprite from '../../../images/sprite.svg';

export const HeaderNav = ({ setShowMenu }) => {
  return (
    <Navi>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/categories"
      >
        Categories
      </StyledLink>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/add"
      >
        Add recipes
      </StyledLink>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/my"
      >
        My recipes
      </StyledLink>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/favorite"
      >
        Favorites
      </StyledLink>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/shopping-list"
      >
        Shopping list
      </StyledLink>
      <StyledLink
        onClick={() => {
          setShowMenu(false);
        }}
        to="/search"
      >
        <svg>
          <use href={sprite + `#search`} />
        </svg>
        <span>Search</span>
      </StyledLink>
    </Navi>
  );
};

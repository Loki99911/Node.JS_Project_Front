import { Navi, StyledLink } from './HeaderNav.styled';
import sprite from '../../../images/sprite.svg';

export const HeaderNav = ({ navColor = 'light', setShowMenu }) => {
  return (
    <Navi>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/categories/beef"
      >
        Categories
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/add"
      >
        Add recipes
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/my?page=1"
      >
        My recipes
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/favorite"
      >
        Favorites
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/shopping-list"
      >
        Shopping list
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/search?query=&type=title"
      >
        <svg navcolor={navColor}>
          <use href={sprite + `#search`} />
        </svg>
        <span>Search</span>
      </StyledLink>
    </Navi>
  );
};

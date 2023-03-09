import { Navi, StyledLink } from './HeaderNav.styled';
import search from '../../../images/svg-before sprite/search.svg';

export const HeaderNav = () => {
  return (
    <Navi>
      <StyledLink to="/categories">
        Categories
      </StyledLink>
      <StyledLink to="/add">
        Add recipes
      </StyledLink>
      <StyledLink to="/my">
        My recipes
      </StyledLink>
      <StyledLink to="/favorite">
        Favorites
      </StyledLink>
      <StyledLink to="/shopping-list">
        Shopping list
      </StyledLink>
      <StyledLink to="/search">
        <img
          src={search}
          alt="search"
        />
      </StyledLink>
    </Navi>
  );
};

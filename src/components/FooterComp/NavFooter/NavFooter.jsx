import { scrollToTop } from 'utils/scrollUp';
import { Link, NavFooterCont } from './NavFooter.styled';

export const NavFooter = () => {
  return (
    <NavFooterCont>
      <Link to="/search?query=&type=ingredients" onClick={scrollToTop}>
        Ingredients
      </Link>
      <Link to="/add" onClick={scrollToTop}>
        Add recipes
      </Link>
      <Link to="/my?page=1" onClick={scrollToTop}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={scrollToTop}>
        Favorites
      </Link>
      <Link to="/shopping-list" onClick={scrollToTop}>
        Shopping list
      </Link>
    </NavFooterCont>
  );
};

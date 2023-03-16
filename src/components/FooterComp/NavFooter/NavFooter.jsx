import { Link, NavFooterCont } from './NavFooter.styled';

export const NavFooter = () => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
 
  return (
    <NavFooterCont>
      <Link to="/search?query=&type=ingredients" onClick={scrollToTop}>
        Ingredients
      </Link>
      <Link to="/add" onClick={scrollToTop}>
        Add recipes
      </Link>
      <Link to="/my" onClick={scrollToTop}>
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

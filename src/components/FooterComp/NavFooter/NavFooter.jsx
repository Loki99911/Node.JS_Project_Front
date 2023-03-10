import { Link, NavFooterCont } from './NavFooter.styled';

export const NavFooter = () => {
 
  return (
    <NavFooterCont>
      <Link to="/search">Ingredients</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorites</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavFooterCont>
  );
};

import { Navi, StyledLink } from './HeaderNav.styled';
import sprite from '../../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HeaderNav = ({ navColor = 'light', setShowMenu }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname.includes('/categories')) {
      setActive('categories');
    } else if (pathname.includes('/add')) {
      setActive('add');
    } else if (pathname.includes('/my')) {
      setActive('my');
    } else if (pathname.includes('/favorite')) {
      setActive('favorite');
    } else if (pathname.includes('/shopping-list')) {
      setActive('shopping-list');
    } else if (pathname.includes('/search')) {
      setActive('search');
    } else {
      setActive('');
    }
  }, [pathname]);

  return (
    <Navi>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/categories/beef"
        selection={(active === 'categories').toString()}
      >
        Categories
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/add"
        selection={(active === 'add').toString()}
      >
        Add recipes
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/my?page=1"
        selection={(active === 'my').toString()}
      >
        My recipes
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/favorite"
        selection={(active === 'favorite').toString()}
      >
        Favorites
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/shopping-list"
        selection={(active === 'shopping-list').toString()}
      >
        Shopping list
      </StyledLink>
      <StyledLink
        navcolor={navColor}
        onClick={() => {
          setShowMenu(false);
        }}
        to="/search?query=&type=title"
        selection={(active === 'search').toString()}
      >
        <svg navcolor={navColor}>
          <use href={sprite + `#search`} />
        </svg>
        <span>Search</span>
      </StyledLink>
    </Navi>
  );
};

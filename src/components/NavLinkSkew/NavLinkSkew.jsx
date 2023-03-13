import { NavLinkImitation, NavLinkSkewStyled } from './NavLinkSkew.styled';

export const NavLinkSkew = ({ navigate, text, styled, location }) => {
  return (
    <>
      {location === 'recipes' ? (
        <NavLinkSkewStyled location={location} styled={styled} to={navigate}>
          {text}
        </NavLinkSkewStyled>
      ) : (
        <NavLinkImitation location={location} styled={styled}>
          {text}
        </NavLinkImitation>
      )}
    </>
  );
};

import { NavLinkSkewStyled } from './NavLinkSkew.styled';

export const NavLinkSkew = ({ navigate, text, styled, location }) => {
  return (
    <NavLinkSkewStyled location={location} styled={styled} to={navigate}>
      {text}
    </NavLinkSkewStyled>
  );
};

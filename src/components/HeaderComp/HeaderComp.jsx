import { useState } from 'react';
import { useMediaQuery } from 'hooks/useMedia';
import sprite from '../../images/sprite.svg';
import {
  BurgerButton,
  BurgerWrapper,
  CloseBtn,
  Header,
  HeaderWrapper,
  LogoWrapper,
  MobileMenuHeaderContainer,
  MobileMenuThemeTogglerWrapper,
  MobileMenuWrapper,
  NavLinkStyled,
} from './HeaderComp.styled';
import logo from '../../images/svg-before sprite/logo_desc.svg';
import { HeaderNav } from 'components/HeaderComp/HeaderNav/HeaderNav';
import { HeaderUser } from 'components/HeaderComp/HeaderUserLogo/HeaderUserLogo';
import { Container } from 'components/Container/Container';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

export const HeaderComp = () => {
  const isRowBased = useMediaQuery('(min-width: 1440px)');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = e => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {isRowBased ? (
        <Header>
          <Container>
            <HeaderWrapper>
              <LogoWrapper>
                <NavLinkStyled to="/">
                  <img src={logo} alt="logo" />
                </NavLinkStyled>
              </LogoWrapper>
              <HeaderNav />

              <HeaderUser />
              <ThemeToggler />
            </HeaderWrapper>
          </Container>
        </Header>
      ) : (
        <>
          <Header>
            <Container>
              <HeaderWrapper>
                <LogoWrapper>
                  <NavLinkStyled to="/main">
                    <img src={logo} alt="logo" />
                  </NavLinkStyled>
                </LogoWrapper>
                <BurgerWrapper>
                  <HeaderUser />
                  <BurgerButton type="button" onClick={toggleMobileMenu}>
                    <svg>
                      <use href={sprite + `#menu`} />
                    </svg>
                  </BurgerButton>
                </BurgerWrapper>
              </HeaderWrapper>
            </Container>
          </Header>
          {showMenu && (
            <MobileMenuWrapper>
              <MobileMenuHeaderContainer>
                <LogoWrapper>
                  <NavLinkStyled to="/main">
                    <img src={logo} alt="logo" />
                  </NavLinkStyled>
                </LogoWrapper>
                <CloseBtn type="button" onClick={toggleMobileMenu}>
                  <svg>
                    <use href={sprite + `#icon-cross`} />
                  </svg>
                </CloseBtn>
              </MobileMenuHeaderContainer>
              <HeaderNav />
              <MobileMenuThemeTogglerWrapper>
                <ThemeToggler />
              </MobileMenuThemeTogglerWrapper>
            </MobileMenuWrapper>
          )}
        </>
      )}
    </>
  );
};

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'hooks/useMedia';
import { getName, getAvatar } from 'redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import {
  BurgerButton,
  BurgerWrapper,
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
import { CloseBtnComp } from 'components/CloseButton/CloseBtn';

export const HeaderComp = () => {
  const { pathname } = useLocation();
  const isRowBased = useMediaQuery('(min-width: 1440px)');
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState('light');
  const [navColor, setNavColor] = useState('light');
  const [burgerColor, setBurgerColor] = useState('light');

  useEffect(() => {
    if (pathname.includes('main') || pathname.includes('recipe')) {
      setColor('dark');
    } else {
      setColor('light');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('recipe')) {
      setNavColor('dark');
    } else {
      setNavColor('light');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('recipe')) {
      setBurgerColor('light');
    } else if (pathname.includes('main')) {
      setBurgerColor('tab-light');
    } else {
      setBurgerColor('dark');
    }
  }, [pathname]);

  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);
  // console.log(userAvatar);

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
                <NavLinkStyled to="/main">
                  <img src={logo} alt="logo" />
                </NavLinkStyled>
              </LogoWrapper>
              <HeaderNav navColor={navColor} />
              <HeaderUser
                color={color}
                name={userName}
                avatarUrl={userAvatar}
              />
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
                  <HeaderUser
                    color={navColor}
                    name={userName}
                    avatarUrl={userAvatar}
                  />
                  <BurgerButton
                    type="button"
                    onClick={toggleMobileMenu}
                    color={burgerColor}
                  >
                    <svg>
                      <use href={sprite + `#menu`} />
                    </svg>
                  </BurgerButton>
                </BurgerWrapper>
              </HeaderWrapper>
            </Container>
          </Header>
          <MobileMenuWrapper isShown={showMenu}>
            <MobileMenuHeaderContainer>
              <LogoWrapper>
                <NavLinkStyled
                  to="/main"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <img src={logo} alt="logo" />
                </NavLinkStyled>
              </LogoWrapper>
              <CloseBtnComp onClick={toggleMobileMenu} />
            </MobileMenuHeaderContainer>
            <HeaderNav setShowMenu={setShowMenu} />
            <MobileMenuThemeTogglerWrapper>
              <ThemeToggler />
            </MobileMenuThemeTogglerWrapper>
          </MobileMenuWrapper>
        </>
      )}
    </>
  );
};

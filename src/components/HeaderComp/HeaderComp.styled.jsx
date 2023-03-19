import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BgMobile1x from '../../images/bg/mobile-menu-bg-mob-1x-min.png';
import BgMobile2x from '../../images/bg/mobile-menu-bg-mob-2x-min.png';
import BgTablet1x from '../../images/bg/mobile-menu-bg-tab-1x-min.png';
import BgTablet2x from '../../images/bg/mobile-menu-bg-tab-2x-min.png';

export const Header = styled.header`
  position: absolute;
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 18px;

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  & img {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;

  & svg {
    width: 28px;
    height: 28px;
    stroke: ${p =>
      p.color === 'light' ? p.theme.colors.mainLight : p.theme.colors.mainDark};

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
      stroke: ${p =>
        p.color === 'light'
          ? p.theme.colors.mainDark
          : p.theme.colors.userName};
    }
  }
`;

export const UserInfo = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 18px;
  display: flex;
  transform: ${p =>
    p.isShown ? 'translate3d(0, 0vh, 0)' : 'translate3d(0, -100vh, 0)'};
  transition: transform 1s cubic-bezier(0, 0.52, 0, 1);
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  background-color: ${p => p.theme.colors.secondaryAccent};
  background-image: url(${BgMobile1x});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgMobile2x});
  }

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
    background-image: url(${BgTablet1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgTablet2x});
    }
  }
`;

export const MobileMenuHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileMenuThemeTogglerWrapper = styled.div`
  display: flex;
`;

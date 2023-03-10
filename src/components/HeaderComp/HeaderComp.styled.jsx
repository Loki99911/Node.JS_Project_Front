import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BgMobile1x from '../../images/bg/mobile-menu-bg-mob-1x-min.png';
import BgMobile2x from '../../images/bg/mobile-menu-bg-mob-2x-min.png';
import BgTablet1x from '../../images/bg/mobile-menu-bg-tab-1x-min.png';
import BgTablet2x from '../../images/bg/mobile-menu-bg-tab-2x-min.png';

export const Header = styled.header`
  /* position: absolute; */
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
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
  & svg {
    width: 28px;
    height: 28px;
    stroke: ${p => p.theme.colors.mainDark};

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
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

export const UserIcon = styled.span`
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f6fa;
  margin-right: 12px;
`;

export const UserText = styled.p`
  margin: 0;
`;

export const UserTextWrap = styled.div`
  position: relative;
  margin-right: 40px;
  &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 0px;
    border: 1px solid #e0e5eb;
    bottom: 43%;
    right: -40px;
    transform: translateY(-50%) rotate(90deg);
  }
`;

export const LogoutBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const LogoutBtnText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  border-bottom: 1px solid black;
  transition: color 250ms linear, border-bottom 250ms linear;
  &:hover {
    color: #ff751d;
    border-bottom: 1px solid #ff751d;
  }
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

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  background-color: transparent;

  & svg {
    width: 32px;
    height: 32px;
    stroke: ${p => p.theme.colors.mainDark};
  }
`;

export const MobileMenuThemeTogglerWrapper = styled.div`
  display: flex;
`;

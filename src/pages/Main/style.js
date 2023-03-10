import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'utils/theme';
import bgrImageDes from '../../images/desktop/mainDes.png';
import bgrImageTab from '../../images/tablet/mainTab-min.png';
import bgrImageMob from '../../images/mobile/mainMob-min.png';

export const BoxForMain = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.btnTextLight};
  font-family: ${theme.fonts.main};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgrImageMob});
  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 375px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 768px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgrImageTab});
  }
  @media screen and (min-width: 1441px) {
    width: 1440px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgrImageDes});
  }
`;

export const BoxForSVG = styled.div`
  width: 55px;
  height: 55px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.mainAccent};

  @media screen and (min-width: 769px) {
    width: 70px;
    height: 70px;
    margin-bottom: 45px;
  }
`;

export const TitleMain = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 14px;

  @media screen and (min-width: 769px) {
    font-size: 28px;
  }
`;

export const TextMain = styled.p`
  font-size: 14px;
  width: 300px;
  margin-bottom: 40px;
  line-height: calc(24 / 18);
  text-align: center;
  letter-spacing: -0.02em;

  @media screen and (min-width: 769px) {
    font-size: 18px;
    width: 425px;
  }
`;

export const BoxForLink = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    gap: 20px;
  }
`;

export const LinkToRegister = styled(Link)`
  font-size: 14px;
  padding: 12px 24px;
  background-color: transparent;
  color: aliceblue;
  border-radius: 20px 60px;
  display: block;
  font-family: ${theme.fonts.main};
  line-height: calc(24 / 16);
  border: 1px solid ${theme.colors.btnTextLight};
  transition: ${theme.transitions.main};
  &:hover {
    background-color: ${theme.colors.mainAccent};
    border: none;
  }

  @media screen and (min-width: 769px) {
    padding: 22px 44px;
    font-size: 16px;
  }
`;

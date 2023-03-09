import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'utils/theme';
import bgrImage from '../../images/desktop/mainDes.png';

export const BoxForMain = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.btnTextLight};
  font-family: ${theme.fonts.main};
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgrImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BoxForSVG = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.mainAccent};
`;

export const TitleMain = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  margin-bottom: 14px;
`;

export const TextMain = styled.p`
  width: 425px;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: calc(24 / 18);
  text-align: center;
  letter-spacing: -0.02em;
`;

export const BoxForLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LinkToRegister = styled(Link)`
  padding: 22px 44px;
  background-color: transparent;
  color: aliceblue;
  border-radius: 20px 60px;
  display: block;
  font-family: ${theme.fonts.main};
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${theme.colors.btnTextLight};
  transition: ${theme.transitions.main};
  &:hover{
  background-color: ${theme.colors.mainAccent};
    border: none;
  }
`;

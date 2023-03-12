import styled from 'styled-components';
import { theme } from 'utils/theme';
import bgrImageMob from '../../images/mobile/mainpage1x_mob.png';
import bgrImageTab from '../../images/tablet/mainpage1x_tab.png';
import bgrImageDesk from '../../images/desktop/mainpage1x_desk.png';
// import bgrImageMob2 from '../../images/mobile/mainpage2x_mob.png';
// import bgrImageTab2 from '../../images/tablet/mainpage2x_tab.png';
// import bgrImageDesk2 from '../../images/desktop/mainpage2x_desk.png';

export const MainPageH1 = styled.h1`
  margin: 132px 12px 0px 12px;
  color: ${p => p.theme.colors.mainHeaderText};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  text-align: center;
  letter-spacing: -0.005em;

  @media (min-width: 768px) {
    margin: 204px 12px 0px 12px;
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const ColorWrap = styled.div`
  background-color: ${theme.colors.btnTextLight};
`;

export const SpanGr = styled.span`
  color: ${p => p.theme.colors.mainAccent};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainPageText = styled.p`
  margin: 14px 40px 157px 40px;
  color: ${theme.colors.mainDark};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: ${theme.letterSpacings.content};

  @media (min-width: 768px) {
    margin: 24px 40px 32px 40px;
    font-size: 14px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    margin: 14px 55px 50px 24px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }
`;

export const MainPageBg = styled.div`
  background-image: url(${bgrImageMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${theme.colors.btnTextLight};
  display: flex;

  @media (min-width: 768px) {
    background-image: url(${bgrImageTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${bgrImageDesk});
  }
`;
export const MainPageDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 368px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    margin-right: 830px;
  }
`;

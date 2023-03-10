import styled from 'styled-components';
import { theme } from 'utils/theme';
import bgrImageMob from '../../images/mobile/mainpage1x_mob.png';
import bgrImageTab from '../../images/tablet/mainpage1x_tab.png';
import bgrImageDesk from '../../images/desktop/mainpage1x_desk.png';

export const MainPageH1 = styled.h1`
       
    margin: 132px 12px 0px 12px;
    color: ${theme.colors.btnHoverBg};
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    display: flex;
    text-align: center;
    letter-spacing: -0.005em;


    @media (min-width: 768px) {
        width: 369px;
        height: 59px;
        font-size: 16px;
        line-height: 24px;
    }

    @media (min-width: 1440px) {
        width: 510px;
        height: 71px;
        font-size: 16px;
        line-height: 24px;
    }
`

export const SpanGr = styled.h1`
        color: ${theme.colors.mainAccent};
        font-family: ${theme.fonts.main};
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
        letter-spacing: -0.005em;
`


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
        width: 369px;
        height: 59px;
        font-size: 16px;
        line-height: 24px;
    }

    @media (min-width: 1440px) {
        width: 510px;
        height: 71px;
        font-size: 16px;
        line-height: 24px;
    }
`

export const MainPageBg = styled.p`      
  background-image: url(${bgrImageMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;


    @media (min-width: 768px) {
    background-image: url(${bgrImageTab});
    }

    @media (min-width: 1440px) {
    background-image: url(${bgrImageDesk});    
    }
`
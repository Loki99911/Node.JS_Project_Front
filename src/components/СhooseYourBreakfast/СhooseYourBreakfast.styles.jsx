import { theme } from 'utils/theme';


import styled from 'styled-components';

export const ChooseBlock = styled.div`
    width: 209px;
    height: 76px;
    background-color: ${theme.colors.mainLight};
    border-radius: 8px;
    padding: 8px;
    margin-left: 88px;
    margin-bottom: 115px;

    @media (min-width: 768px) {
        font-size: 14px;
        padding: 12px;
        line-height: 20px;
        letter-spacing: -0.24px;
        width: 261px;
        height: 100px;
        position: absolute;
        bottom: 140px;
        right: 55px;
    }

    @media (min-width: 1440px) {
        line-height: 20px;
        padding: 16px;
        width: 298px;
        height: 114px;
    }
`;

export const ChooseText = styled.p`

    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: ${theme.letterSpacings.subheader};
    color: ${theme.colors.secondaryDark};
        @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
    }

    @media (min-width: 1440px) {
        line-height: 20px;
    }
`;

export const ChooseSpan = styled.span`
    color: ${theme.colors.mainAccent};
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: ${theme.letterSpacings.subheader};
    
    
    @media (min-width: 768px) {
        font-size: 14px;
    }

    @media (min-width: 1440px) {
        line-height: 20px;
    }
`
export const ChooseLink = styled.a`

    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: ${theme.letterSpacings.content};
    color: ${theme.colors.secondaryDark};
    
    margin-top: 4px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 768px) {
        font-size: 14px;
        margin-top: 30px;
    }

    @media (min-width: 1440px) {
        line-height: 20px;
        margin-top: 35px;
    }
`;

export const RightArrow = styled.svg`
    width: 18px;
    height: 18px;
    margin-left: 4px;
    display: flex;
        &:hover{
       transform: scale(1.2) ;
    }
   `


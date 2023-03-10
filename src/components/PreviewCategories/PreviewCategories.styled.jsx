import styled from 'styled-components';
import { theme } from 'utils/theme';

export const CardDishes = styled.div`
width: 343px;
height: 323px;
border-radius: 8px;
position: relative;
`;


export const TitlePrew = styled.p`
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;
letter-spacing: ${theme.letterSpacings.content};
color: ${theme.colors.sectionHeaderDark};
margin-bottom: 32px;
`;

export const CardTitle = styled.p`
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.24px;
color: ${theme.colors.secondaryDark};
padding: 16px;
background-color: ${theme.colors.mainLight};
position: absolute;
margin: -84px 16px;
border-radius: 8px;
width: 275px;
`

export const BtnCategories = styled.a`
border-radius: 6px;
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: ${theme.colors.btnTextLight};
padding: 10px 24px;
margin-top: 24px;
background-color: ${theme.colors.mainAccent};
cursor: pointer;
float: right; 
transition: ${theme.transitions.main};
&:hover {
    background-color: ${theme.colors.mainDark};
    }
`

export const CardWrapper = styled.div`
margin: 0 16px 94px;
/*  */
`

export const CardImg = styled.img`
height: 322px;
width: 100%;

`
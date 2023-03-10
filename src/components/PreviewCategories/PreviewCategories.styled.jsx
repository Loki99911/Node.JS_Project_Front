import styled from 'styled-components';
import { theme } from 'utils/theme';

export const CardDishes = styled.div`
width: 343px;
height: 323px;
border-radius: 8px;
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
bottom: 100px;
border-radius: 8px;
width: 45vw;
margin: 0 18px;
`

export const BtnCategories = styled.a`

width: 94px;
height: 38px;
border-radius: 6px;
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: ${theme.colors.btnTextLight};
margin-top: 24px;
background-color: ${theme.colors.mainAccent};
cursor: pointer;
margin-left: auto;
justify-content: center;
transition: ${theme.transitions.main}
&:hover{
    color: ${theme.colors.secondaryDark};
    }
`

export const CardWrapper = styled.div`
margin: 0 16px 32px;
position: relative;
`
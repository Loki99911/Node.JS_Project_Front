import styled from 'styled-components';
import { theme } from 'utils/theme';


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
margin-top: 0;
margin-bottom: 94px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
export const CardDish = styled.div`
width: 343px;
height: 323px;
border-radius: 8px;
position: relative;

width: calc(25% - 16px);
  
  @media (max-width: 1024px) {
    width: calc(50% - 16px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
    
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
width: 307px;
@media (min-width: 768px) {
       width: 300px;
    }

    @media (min-width: 1440px) {
        width: 268px;
    }



`

export const CardImg = styled.img`
height: 323px;
width: 343px;
object-fit: cover;
 @media (min-width: 768px) {
       width: 336px;
    }

    @media (min-width: 1440px) {
        width: 300px;
    }


`

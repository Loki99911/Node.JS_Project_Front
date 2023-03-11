import styled from 'styled-components';
import { theme } from 'utils/theme';

export const CardDish = styled.div`
width: 343px;
height: 323px;
border-radius: 8px;
position: relative;
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
`

export const CardImg = styled.img`
height: 322px;
width: 100%;

`
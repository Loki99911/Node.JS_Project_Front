import { ButtonSkewStyle } from "components/ButtonSkew/buttonSkew.styled";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "utils/theme";

export const BtnOthCtg = styled(NavLink)`
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
border-radius: 30px 80px;
color: ${theme.colors.btnHoverBg};
padding: 14px 32px;
border: ${theme.borders.btnHover};
transition: ${theme.transitions.main};
&:hover {
    color: ${theme.colors.btnTextLight};
    background-color: ${theme.colors.mainAccent};
    
}
@media (min-width: 768px) {
        padding: 20px 52px;
        font-size: 16px;
        line-height: 24px;
        }

    @media (min-width: 1440px) {
        padding: 20px 52px;
        font-size: 16px;
        line-height: 24px;
    }
`

export const ButtonOthCtgWrap = styled.div`
margin: 40px 0px 100px;
display: flex;
justify-content: center;
${ButtonSkewStyle} {color: ${theme.colors.btnHoverBg};
&:hover {color: ${theme.colors.btnTextLight }}};


@media (min-width: 768px) {
        margin: 40px 0px 100px;
        }

    @media (min-width: 1440px) {
        margin: 14px 0px 118px;
    }


`
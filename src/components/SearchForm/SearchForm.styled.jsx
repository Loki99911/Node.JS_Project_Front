import { ButtonSkewStyle } from 'components/ButtonSkew/buttonSkew.styled';
import styled from 'styled-components';
import { theme } from 'utils/theme';


export const SearchBlock = styled.div`
    width: 295px;
    height: 52px;
    background-color: ${theme.colors.mainLight};
    /* border-radius: 30px 80px ; */
    
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
    margin: 0 16px 83px;
    border: 1px solid #F0F0F0;
    color: ${theme.colors.disabledGrey};
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;


    @media (min-width: 768px) {
        width: 369px;
        height: 59px;
        font-size: 16px;
        line-height: 24px;
        margin: 0 16px 195px;
    }

    @media (min-width: 1440px) {
        width: 510px;
        height: 71px;
        font-size: 16px;
        line-height: 24px;
    }

${ButtonSkewStyle}{width: 113px; height: 52px;}

@media (min-width: 768px) {
 ${ButtonSkewStyle}{width: 161px; height: 59px;}
    }

    @media (min-width: 1440px) {
${ButtonSkewStyle}{width: 161px; height: 70px;}
    }


`
export const SearhButton = styled.div`
    /* width: 113px;
    height: 52px; */
    padding: 16px 32px;
    background-color: ${theme.colors.mainBlack};
    border-radius: 20px 40px;

    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.colors.btnTextLight};
    cursor: pointer;
    transition: ${theme.transitions.main};

    &:hover {
        background-color: ${theme.colors.mainAccent};
    }
    
    @media (min-width: 768px) {
        width: 161px;
        height: 59px;
        font-size: 16px;
        line-height: 24px;
    }

    @media (min-width: 1440px) {
        width: 161px;
        height: 70px;
        font-size: 16px;
        line-height: 24px;
    }
`

export const SearchIn = styled.form`
    
    display: flex;
    justify-content: flex-end;
`

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 20px 40px;
    border: none;
   background-color: transparent;
font-family: ${theme.fonts.main};
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
padding-left: 32px;
&:hover {
    border: none;
    outline: none;
};
&:active {
    border: none;
    outline: none;
};
&:focus {
    border: none;
    outline: none;
}


    `

import styled from 'styled-components';
import { theme } from 'utils/theme';


export const SearchBlock = styled.div`
    width: 295px;
    height: 52px;
    background-color: ${theme.colors.mainLight};
    border-radius: 20px 40px ;
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
    }

    @media (min-width: 1440px) {
        width: 510px;
        height: 71px;
        font-size: 16px;
        line-height: 24px;
    }
`
export const SearhButton = styled.div`
    width: 113px;
    height: 52px;
    background-color: ${theme.colors.mainBlack};
    border-radius: 20px 40px;
     /* border: 1px solid ${theme.colors.mainBlack}; */
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${theme.colors.btnTextLight};
    text-align: center;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
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
    padding-left: 8px;
    margin: auto;
    display: flex;
    background-color: transparent !important;
`

export const SearchInput = styled.form`
    border-radius: 20px 40px;
    padding-left: 7px;
    border: none;
    color: ${theme.colors.disabledGrey};
    `

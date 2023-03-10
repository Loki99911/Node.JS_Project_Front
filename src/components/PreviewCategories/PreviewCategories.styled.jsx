import styled from 'styled-components';


export const CardDishes = styled.div`
width: 343px;
height: 323px;
border-radius: 8px;
`;


export const TitlePrew = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 28px;
letter-spacing: -0.02em;
color: #001833;
margin-bottom: 32px;
`;



export const CardTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.24px;
color: #3E4462;
padding: 16px 16px 16px 16px;
background-color: #FFFFFF;
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
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #FAFAFA;
margin-top: 24px;
background-color: #8AA936;
cursor: pointer;
margin-left: auto;
justify-content: center;
&:hover{
    color: #3E4462;
    }
`

export const CardWrapper = styled.div`
margin: 0 16px 32px;
position: relative;
`
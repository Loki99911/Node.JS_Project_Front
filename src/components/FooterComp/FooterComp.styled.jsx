import styled from 'styled-components';

export const FooterConteiner = styled.footer`
  margin-top: auto;
`;

export const FooterBg = styled.div`
  width: 100%;
  height: 435px;
  background-color: #22252a;

  @media screen and (min-width: 768px) {
    height: 423px;
  }

  @media screen and (min-width: 1440px) {
    height: 414px;
  }
`;

export const FooterSm = styled.div`
  width: 100%;
  padding: 28px 0;
  text-align: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 0;
  }

  span {
    margin-left: 28px;
    font-weight: 400;
  }

  p {
    font-size: 10px;
    line-height: 10px;
    font-style: normal;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
    }
    letter-spacing: -0.01em;

    color: #22252a;

    opacity: 0.5;
  }

`;

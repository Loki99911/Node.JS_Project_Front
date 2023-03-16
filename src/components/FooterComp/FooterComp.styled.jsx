import styled from 'styled-components';

export const FooterConteiner = styled.footer`
  margin-top: auto;
  width: 100%;
`;

export const WrapDesk = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 173px;
    width: 100%;
    vertical-align: baseline;
  }

  @media screen and (min-width: 1440px) {
    gap: 159px;
    margin-right: 235px;
  }
`;

export const FooterBg = styled.div`
  height: auto;
  background-color: ${p => p.theme.colors.footerBg};
  padding-top: 28px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 64px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
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
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.footerCopyRight};
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
    }
  }
`;

import styled from 'styled-components';

export const FooterForma = styled.form`
  position: relative;
  margin-top: 32px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 204px;
  height: 84px;

  .icon {
    position: absolute;
    top: 13px;
    left: 14px;
    stroke: ${p => p.theme.colors.mainLight};

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 16px;
      top: 17px;
      left: 120px;
    }

    @media screen and (min-width: 1440px) {
      width: 20px;
      height: 16px;
      top: 128px;
      left: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    gap: 0;
    flex-direction: column;
    width: 339px;
  }
`;

export const FooterFormaBtn = styled.button`
  background-color: ${p => p.theme.colors.mainAccent};
  height: 84px;
  color: ${p => p.theme.colors.btnTextLight};
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    width: 100%;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }

  :hover {
    color: ${p => p.theme.colors.btnHoverBg};
  }
`;

export const FooterFormaInput = styled.input`
  height: 84px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;

  color: ${p => p.theme.colors.mainLight};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  border: 1px solid #45474b;
  outline: transparent;

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 46px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
  }
  @media screen and (min-width: 1440px) {
    width: 285px;
    padding-left: 51px;
    height: 57px;
  }

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.mainLight};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainLight};

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
`;

export const FooterFormaText = styled.div`
  margin-bottom: 28px;
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${p => p.theme.colors.mainLight};
    margin-bottom: 14px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainLight};
  }
`;

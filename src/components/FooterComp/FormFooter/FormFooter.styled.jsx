import styled from 'styled-components';

export const FooterForma = styled.form`
  position: relative;
  margin-top: 32px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 204px;

  .icon {
    position: absolute;
    top: 13px;
    left: 14px;
    width: 16px;
    height: 12px;
    fill: ${({ color }) => color};

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 16px;
      top: 16px;
      left: 120px;
    }

    @media screen and (min-width: 1440px) {
      top: 126px;
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

  .error {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 21px;
    color: #e74a3b;

    top: -20px;
    left: 0;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      top: -23px;
      left: 103px;
    }

    @media screen and (min-width: 1440px) {
      top: 82px;
      left: 0;
    }
  }
`;

export const FooterFormaBtn = styled.button`
  width: 204px;
  height: 38px;
  background-color: ${p => p.theme.colors.mainAccent};
  color: ${p => p.theme.colors.btnTextLight};
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

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

  :hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${p => p.theme.colors.btnHoverBg};
  }

  &[disabled] {
    opacity: 0.7;
    /* cursor: not-allowed; */
  }
`;

export const FlagForInput = styled.div`
  position: absolute;
  top: 11px;
  right: 12px;

  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 302px;
  }

  @media screen and (min-width: 1440px) {
    top: 126px;
    right: 12px;
  }
`;

export const FooterFormaInput = styled.input`
  width: 204px;
  height: 38px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainLight};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  padding-right: 38px;
  border: 1px solid ${({ borderColor }) => borderColor};
  outline: transparent;
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
  }

  @media screen and (min-width: 1440px) {
    width: 338px;
    padding-left: 51px;
    height: 59px;
  }

  :hover,
  :focus {
    border: 1px solid ${({ color }) => color};
    &::placeholder {
      opacity: 1;
    }
  }

  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainLight};
    opacity: 0.8;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }

  &:hover ~ svg.icon use {
    opacity: 1;
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

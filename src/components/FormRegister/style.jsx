import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const FormForAuth = styled(Form)`
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.main};
  border-radius: 30px;
  background-color: #2a2c36;
  color: ${theme.colors.btnTextLight};
  margin-top: -35px;
  padding: 20px 10px;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 350px;
    padding: 40px 28px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 500px;
    padding: 44px 50px;
    margin-top: -10px;
  }
  @media screen and (min-width: 1441px) {
    width: 400px;
    padding: 44px 50px;
  }
`;

export const TitleForForm = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(28 / 24);
  letter-spacing: -0.02em;
  margin-bottom: 18px;
  @media screen and (min-width: 769px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

export const BoxForForm = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    gap: 25px;
  }
`;

export const BoxForInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
  opacity: 0.8;
  transition: ${theme.transitions.main};
  &:hover {
    opacity: 1;
  }
`;
export const IconForInput = styled.div`
  width: 18px;
  height: 18px;
  left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  pointer-events: none;
  @media screen and (min-width: 769px) {
    width: 24px;
    height: 24px;
    left: 18px;
    top: 20px;
  }
`;
export const FlagForInput = styled.div`
  right: 14px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  pointer-events: none;
  @media screen and (min-width: 769px) {
    width: 24px;
    height: 24px;
    right: 18px;
    top: 20px;
  }
`;

export const SvgAuth = styled.svg`
  fill: transparent;
  stroke: ${({ color }) => color};
`;

export const InputForAuth = styled(Field)`
  height: 45px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${({ borderColor }) => borderColor};
  padding-left: 40px;
  color: ${theme.colors.mainLight};
  transition: ${theme.transitions.main};

  @media screen and (min-width: 769px) {
    height: 60px;
    font-size: 20px;
    padding-left: 50px;
  }

  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  &::placeholder {
    font-size: 14px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: calc(27 / 18);
    letter-spacing: -0.02em;
    color: ${theme.colors.mainLight};

    @media screen and (min-width: 769px) {
      font-size: 18px;
    }
  }
  &:focus,
  :hover {
    border: 1px solid ${({ color }) => color};
    outline: none;
    color: ${theme.colors.mainLight};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 28px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.mainAccent};
  text-align: center;
  color: ${theme.colors.btnTextLight};
  transition: ${theme.transitions.main};
  @media screen and (min-width: 769px) {
    height: 60px;
    font-size: 20px;
    margin-top: 50px;
  }
  &:hover {
    color: ${theme.colors.btnHoverBg};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${({ color }) => color};
  top: 55px;
  left: 10px;
  font-size: 11px;
  @media screen and (min-width: 769px) {
    top: 70px;
    left: 10px;
    font-size: 14px;
  }
`;

export const LinkAuth = styled(Link)`
  display: block;
  font-family: ${theme.fonts.main};
  color: ${theme.colors.btnTextLight};
  text-align: center;
  margin-top: 20px;
  text-decoration: underline;
  font-size: 14px;
  line-height: calc(24 / 16);

  @media screen and (min-width: 769px) {
    font-size: 16px;
  }
`;

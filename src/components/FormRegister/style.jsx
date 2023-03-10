import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const FormForAuth = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.main};
  border-radius: 30px;
  background-color: #2a2c36;
  color: ${theme.colors.btnTextLight};
  padding: 44px 50px;
`;

export const TitleForForm = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: -0.02em;
  margin-bottom: 30px;
`;

export const BoxForForm = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
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
  left: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  pointer-events: none;
  font-size: 1.2em;
`;
export const FlagForInput = styled.div`
  right: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  pointer-events: none;
`;

export const SvgAuth = styled.svg`
fill: transparent;
stroke: ${({ color }) => color};
`

export const InputForAuth = styled(Field)`
  height: 60px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${({ color }) => color};
  padding-left: 50px;
  color: ${theme.colors.mainLight};
  transition: ${theme.transitions.main};
   :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  &::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(27 / 18);
    letter-spacing: -0.02em;
    color: ${theme.colors.mainLight};
  }
  &:focus {
    border: 1px solid ${({ color }) => color};
    outline: none;
    color: ${theme.colors.mainLight};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 50px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.mainAccent};
  text-align: center;
  color: ${theme.colors.btnTextLight};
  transition: ${theme.transitions.main};
  &:hover {
    color: ${theme.colors.btnHoverBg};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 70px;
  left: 10px;
  color: ${({ color }) => color};
`;

export const LinkAuth = styled(Link)`
  display: block;
  font-family: ${theme.fonts.main};
  color: ${theme.colors.btnTextLight};
  text-align: center;
  margin-top: 20px;
  text-decoration: underline;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

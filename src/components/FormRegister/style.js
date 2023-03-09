import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { Field, Form } from 'formik';

export const FormForAuth = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap:25px;
  font-family: ${theme.fonts.main};
  border-radius: 30px;
  background-color:  #2A2C36;
color: ${theme.colors.btnTextLight};
  padding: 44px 50px;
`;

export const TitleForForm = styled.h3`
font-weight: 600;
font-size: 28px;
line-height: 30px;
letter-spacing: -0.02em;
`

export const BoxForInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;
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
  color: black;
  font-size: 1.2em;
  background-color: brown;
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
  font-size: 1.2em;
  pointer-events: none;
  color: black;
  background-color: brown;
`;

export const InputForAuth = styled(Field)`
  height: 60px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${theme.colors.mainLight};
  padding-left: 50px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.mainAccent};
  text-align: center;
color: ${theme.colors.btnTextLight};
  &:hover{
  color: ${theme.colors.btnHoverBg};
  }

`

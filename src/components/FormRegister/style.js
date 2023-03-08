import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormForAuth = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap:25px;
  font-size: 20px;
  border-radius: 1px;
  border: 2px solid brown;
  background-color: black;
  padding: 44px 50px;
`;

export const TitleForForm = styled.h3`
font-family: 'Poppins';
font-weight: 600;
font-size: 28px;
line-height: 30px;
letter-spacing: -0.02em;
color: #FAFAFA;
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
  border-radius: 1px;
  border: 2px solid brown;
  background-color: bisque;
  padding-left: 50px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border-radius: 1px;
  border: 2px solid brown;
  background-color: bisque;
  text-align: center;

`

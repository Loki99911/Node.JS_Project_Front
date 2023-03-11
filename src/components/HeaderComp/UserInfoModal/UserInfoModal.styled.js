import styled from 'styled-components';
import { Field, Form } from 'formik';

import PlusIcon from '../../../images/plus.svg';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  width: 330px;
  padding: 32px 24px 60px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  background-color: ${p => p.theme.colors.btnTextLight};
  border-radius: ${p => p.theme.radii.modal};
  opacity: 1;
  z-index: 20000;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding: 50px 40px 62px 40px;
    width: 480px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 50px 80px 50px;
    width: 500px;
  }
`;

export const UserEditForm = styled(Form)`
  /* position: relative; */

  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }

  & img {
    width: 88px;
    height: 88px;
    border-radius: ${p => p.theme.radii.circle};

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const UserSvgWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.circle};
  background-color: ${p => p.theme.colors.mainGreyBg};

  & svg {
    width: 40px;
    height: 40px;
    stroke: ${p => p.theme.colors.secondaryGreyBg};
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: -5%;
    transform: translateX(-50%);
    content: url(${PlusIcon});
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: ${p => p.theme.colors.mainAccent};
    border-radius: ${p => p.theme.radii.circle};
  }

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;

    & svg {
      width: 47px;
      height: 47px;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 33px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const NameInput = styled(Field)`
  width: 100%;
  padding: 14px;
  padding-left: 63px;
  border-radius: ${p => p.theme.radii.btnStandart};
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[0]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.mainDark};
  outline: none;
  /* border: 2px solid #c4c4c4; */
  border: 2px solid ${({ color }) => color};
  background-color: transparent;
`;

export const NameLabel = styled.label`
  width: 100%;
  position: relative;
`;

export const UserIcon = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  stroke: ${({ color }) => color};
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.main};
  font-family: ${p => p.theme.fonts.btnStandart};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-size: 14px;
  white-space: nowrap;
  color: ${p => p.theme.colors.btnTextLight};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.btnHoverBg};
  }
`;

export const FlagForInput = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: red;
  top: 50%;
  left: 24px;
  transform: translateY(-150%);
  font-size: 11px;

  @media screen and (min-width: 768px) {
    left: 40px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    left: 50px;
  }
`;

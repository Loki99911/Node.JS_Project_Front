import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  ConfirmationText,
  ContentWrapper,
  LogoutBtnsWrapper,
  LogoutMenuBtn,
} from './LogoutConfirm.styled';

export const LogoutConfirmationComp = ({ closeModal }) => {
  const dispatch = useDispatch();
  const onLogOutBtnClick = () => {
    dispatch(logOut());
    closeModal();
  };
  return (
    <ContentWrapper>
      <ConfirmationText>Are you sure you want to log out?</ConfirmationText>
      <LogoutBtnsWrapper>
        <LogoutMenuBtn onClick={onLogOutBtnClick}>Log out</LogoutMenuBtn>
        <LogoutMenuBtn status="cancel" onClick={closeModal}>
          Cancel
        </LogoutMenuBtn>
      </LogoutBtnsWrapper>
    </ContentWrapper>
  );
};

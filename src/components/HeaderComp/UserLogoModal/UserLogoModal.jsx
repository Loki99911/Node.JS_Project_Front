import { createPortal } from 'react-dom';
import css from './Modal.module.css';
// import close from '../../images/close.svg';
// import { useEffect } from 'react';
// import { logout } from 'redux/Auth/authOperations.js';
// import { useDispatch } from 'react-redux';

export default function UserLogoModal({ title, modalChange }) {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     window.addEventListener('keydown', event => {
  //       if (event.code === 'Escape') {
  //         modalChange(false);
  //       }
  //     });

  //     return window.removeEventListener('keydown', event => {});
  //   }, [modalChange]);

  const handleOverlay = event => {
    if (event.currentTarget === event.target) {
      modalChange(false);
    }
  };

  const onSubmitButton = () => {
    //  dispatch(logout());
    modalChange(true);
    return false;
  };
  // const onRejectButton = () => {
  //   modalChange(false);
  // };

  return createPortal(
    <div className={css.backdrop} onClick={handleOverlay}>
      <div className={css.modal}>
        <button
          className={css.buttonYes}
          onClick={onSubmitButton}
          type="button"
        >
          yes
        </button>
      </div>
    </div>,
    document.body
  );
}

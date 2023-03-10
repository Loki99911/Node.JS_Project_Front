import styled from 'styled-components';

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
  width: fit-content;
  max-height: 70vh;
  padding: 60px 16px;
  background-color: ${p => p.theme.colors.mainLight};
  opacity: 1;
  z-index: 20000;
  overflow-y: scroll;

  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.mainAccent};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.mainDark};
  }

  @media screen and (min-width: 768px) {
    /* padding: 60px; */
  }
`;

import styled from '@emotion/styled';
import bgrImage from 'images/desktop/FormAuthDes.png'

export const BoxForAuth = styled.div`
  width: 1440px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 115px;
  background-image: url(${bgrImage});
  background-repeat: no-repeat;
  background-position: bottom;
`;
export const BoxForImage = styled.div`
  width: 532px;
  height: 468px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AuthImage = styled.img`
  width: 100%;
`;


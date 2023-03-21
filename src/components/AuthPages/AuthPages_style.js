import styled from 'styled-components';
import bgrImageDes from 'images/desktop/FormAuthDes.png';
import bgrImageTab from 'images/tablet/FormAuthTab-min.png';
import bgrImageMob from 'images/mobile/FormAuthMob-min.png';

export const BoxForAuth = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  background-image: url(${bgrImageMob});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bgrImageTab});
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 115px;
    background-image: url(${bgrImageDes});
  }
`;

export const BoxForImage = styled.div`
  width: 285px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 410px;
    height: 360px;
  }
  @media screen and (min-width: 1441px) {
    width: 532px;
    height: 468px;
  }
`;

export const AuthImage = styled.picture`
  width: 100%;
  display: block;
`;

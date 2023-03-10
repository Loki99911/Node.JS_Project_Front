import styled from 'styled-components';

import bigMob1 from '../../images/bg/bg_big_mobile_1x.png';
import bigMob2 from '../../images/bg/bg_big_mobile_2x.png';
import smallMob1 from '../../images/bg/bg_small_mob_1x.png';
import smallMob2 from '../../images/bg/bg_small_mob_2x.png';
import bigTab1 from '../../images/bg/bg_big_tablet_1x.png';
import bigTab2 from '../../images/bg/bg_big_tablet_2x.png';
import smallTab1 from '../../images/bg/bg_small_tablet_1x.png';
import smallTab2 from '../../images/bg/bg_small_tablet_2x.png';
import bigDesk1 from '../../images/bg/bg_big_desktop_1x.png';
import bigDesk2 from '../../images/bg/bg_big_desktop_2x.png';
import smallDesk1 from '../../images/bg/bg_small_desktop_1x.png';
import smallDesk2 from '../../images/bg/bg_small_desktop_2x.png';

export const SharedLayoutConteiner = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${bigMob1}), url(${smallMob1});
  background-repeat: no-repeat;
  background-size: 315px 487px, 179px 155px;
  background-position: bottom 270px left, bottom right;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bigMob2}), url(${smallMob2});
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    background-image: url(${bigTab1}), url(${smallTab1});
    background-repeat: no-repeat;
    background-size: 500px 790px, 341px 261px;
    background-position: bottom 130px left, bottom right;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bigTab2}), url(${smallTab2});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;

    background-image: url(${bigDesk1}), url(${smallDesk1});
    background-repeat: no-repeat;
    background-size: 696px 1037px, 531px 391px;
    background-position: bottom 15px left, bottom right;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bigDesk2}), url(${smallDesk2});
    }
  }
`;

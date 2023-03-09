import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 768px) {
    justify-content: start;
    font-size: 28px;
    line-height: 28px;
  }

  img {
    width: 32px;
    height: 32px;
    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const ContentFooter = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  padding-left: 30px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainLight};
  text-align: left;

  li {
    :not(:last-child) {
      margin-bottom: 10px;
      @media screen and (min-width: 1440px) {
        margin-bottom: 12px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    margin-top: 40px;
  }
`;

export const TextFooterContainer = styled.div`
  @media screen and (min-width: 1440px) {
    width: 418px;
  }
`;
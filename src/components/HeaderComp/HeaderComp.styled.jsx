import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const UserInfo = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.span`
  font-weight: 700;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f6fa;
  margin-right: 12px;
`;

export const UserText = styled.p`
  margin: 0;
`;

export const UserTextWrap = styled.div`
  position: relative;
  margin-right: 40px;
  &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 0px;
    border: 1px solid #e0e5eb;
    bottom: 43%;
    right: -40px;
    transform: translateY(-50%) rotate(90deg);
  }
`;

export const LogoutBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const LogoutBtnText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  border-bottom: 1px solid black;
  transition: color 250ms linear, border-bottom 250ms linear;
  &:hover {
    color: #ff751d;
    border-bottom: 1px solid #ff751d;
  }
`;

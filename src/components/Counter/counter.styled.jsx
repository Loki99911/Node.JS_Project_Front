import styled from 'styled-components';

export const CounterButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.mainBlack};
  margin: 0;
  padding: 0;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const CounterWrapper = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;
  padding: 0 4px;
  width: 92px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    color: ${({ theme }) => theme.colors.mainBlack};
  }
`;

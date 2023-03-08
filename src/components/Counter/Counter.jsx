import { CounterButton, CounterWrapper } from './counter.styled';

export const Counter = ({ counter, handleDecrement, handleIncrement }) => {
  return (
    <CounterWrapper>
      <CounterButton type="click" onClick={handleDecrement}>
        -
      </CounterButton>
      <span>{counter}</span>
      <CounterButton type="click" onClick={handleIncrement}>
        +
      </CounterButton>
    </CounterWrapper>
  );
};

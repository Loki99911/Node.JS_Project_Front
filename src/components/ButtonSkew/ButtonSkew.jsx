import { ButtonSkewStyle } from './buttonSkew.styled';

export const ButtonSkew = ({ type, fn, styled, text, location }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <ButtonSkewStyle
      type={type}
      onClick={onClick}
      styled={styled}
      location={location}
    >
      {text}
    </ButtonSkewStyle>
  );
};

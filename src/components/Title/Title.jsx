import {TitleConteiner} from './Title.styled'
export const Title = ({ children }) => {
  return (
    <TitleConteiner>
      <h2>{children}</h2>
    </TitleConteiner>
  );
};

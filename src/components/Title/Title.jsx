import { useSelector } from 'react-redux';
import { getMode } from 'redux/theme/themeSelector';
import { TitleConteiner } from './Title.styled';

export const Title = ({ children }) => {
  const { mode } = useSelector(getMode);

  return (
    <TitleConteiner mode={mode}>
      <h2>{children}</h2>
    </TitleConteiner>
  );
};

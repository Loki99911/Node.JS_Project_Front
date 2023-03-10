import userAvatar from '../../../images/default.jpg';
import { HeaderUserWrapper } from './HeaderUser.styled';

export const HeaderUser = ({ name = 'User', avatarUrl = userAvatar }) => {
  return (
    <HeaderUserWrapper>
      <img src={avatarUrl} alt={name} />
      <p>{name}</p>
    </HeaderUserWrapper>
  );
};

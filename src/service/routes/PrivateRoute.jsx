import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsUserFetching, getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';


export const PrivateRoute = ({ children }) => {
    const isUserFetching = useSelector(getIsUserFetching);
  const isLogin = useSelector(getIsLoggedIn);
  return isLogin ? (isUserFetching ? (<Loader/>): children) : <Navigate to="/" />;
};

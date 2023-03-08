import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/Auth/authSelectors';

export const PrivateRoute = ({ children }) => {
    const isLogin = useSelector(getIsLoggedIn);
    return isLogin ? children : <Navigate to="/" />;
};

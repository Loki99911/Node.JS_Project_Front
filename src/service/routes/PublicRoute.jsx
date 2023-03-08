import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/Auth/authSelectors';
import PropTypes from 'prop-types';

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/main',
}) => {
  const isLogin = useSelector(getIsLoggedIn);
  const shouldRedirect = isLogin && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

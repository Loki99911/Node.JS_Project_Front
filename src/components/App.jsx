import Main from 'pages/Main/Main';
import Register from 'pages/Register/Register';
import Singin from 'pages/Signin/Signin';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'service/routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute restricted>
              <Singin />
            </PublicRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
 
       
        {/* <Route path="*" element={<Navigate to="/main" />} />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        /> */}
      </Route>
    </Routes>
  );
};

import React from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import Home from '../pages/HomePage/Home';
import Layout from './layout/Layout';
import NotFoundPage from '../pages/NotFounPage/notPagesFound';

const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="teal"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;

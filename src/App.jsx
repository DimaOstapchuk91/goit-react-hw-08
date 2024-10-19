import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage ';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo='/contacts'
                />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo='/contacts'
                />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo='/login'
                />
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </Layout>
      )}
    </>
  );
}

export default App;

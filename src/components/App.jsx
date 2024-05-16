import './App.css';
import HomePage from '../pages/HomePage/HomePage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx';
import ContactsPage from '../pages/ContactsPage/ContactsPage.jsx';
import Layout from './Layout.jsx'
import RestrictedRoute from './RestrictedRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (<p>Refreshing...</p>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
            <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          </Routes>
        </Layout>
      )}
    </>
  )
}

export default App;
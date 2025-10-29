import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import store from './redux/app/store';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';
import MovieDetail from './components/MovieDetail';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';

const App = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const theme = currentUser?.theme || 'dark';

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-gradient-to-br from-purple-950 to-black min-h-screen transition-colors duration-500">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/react_movies_management" element={<Navigate to="/home" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/search/:q" element={<SearchPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App

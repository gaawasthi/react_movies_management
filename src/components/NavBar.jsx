import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Film,
  User,
  Search,
  Moon,
  Sun,
  Clapperboard,
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/features/authSlice';
import { toggleTheme } from '../redux/features/themeSlice';

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eq = encodeURIComponent(query);
    navigate(`/search/${eq}`);
    setQuery('');
    window.scrollTo({ top: 0 });
  };

  const handleChange = (e) => setQuery(e.target.value);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-gradient-to-r from-[#2b004f] via-[#1a002e] to-black shadow-[0_0_25px_rgba(128,0,255,0.25)] border-b border-purple-800/40 text-black dark:text-white fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold hover:text-blue-400 transition"
          >
            <Film size={28} />
            <span>MovieApp</span>
          </Link>

        
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search movies..."
                  aria-label="Search movies"
                  className="w-full pl-10 pr-24 py-2 bg-gray-800 text-white rounded-xl"
                  value={query}
                  onChange={handleChange}
                  required
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/movies"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Clapperboard size={20} className="mb-1" />
              <span className="hidden sm:inline">Movies</span>
            </Link>


{
  currentUser ? (
   <Link
              to="/profile"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <User size={20} className="mb-1" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
  ):null
}
         

            {currentUser ? (
              <button
                onClick={() => {
                  dispatch(logout());
                  window.scrollTo({ top: 0 });
                  navigate('/login');
                }}
                className="hover:text-red-400 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="hover:text-blue-400 transition"
              >
                Login
              </button>
            )}

            
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-yellow-300" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full px-4 py-2 pl-10 bg-gray-800 text-white dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-black dark:text-gray-400"
              size={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

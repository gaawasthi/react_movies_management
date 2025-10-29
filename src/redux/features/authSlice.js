import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    isAuthenticated: !!localStorage.getItem('currentUser'),
    error: null,
  },

  reducers: {
    signup: (state, action) => {
      const { email, password, name } = action.payload;

      const userExists = state.users.find((user) => user.email === email);
      if (userExists) {
        state.error = 'User already exists';
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        favorites: [],
        watchNext: [],
        recentlyViewed: [],
        theme: 'light',
      };

      state.users.push(newUser);
      state.currentUser = newUser;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
    },

    login: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        state.error = 'Invalid credentials';
      }
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('currentUser');
    },

    clearError: (state) => {
      state.error = null;
    },

    addToFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.currentUser) return;

      state.currentUser.favorites = state.currentUser.favorites || [];
      state.currentUser.favorites.push(movie);

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    removeFavorite: (state, action) => {
      const removeId = action.payload;
      if (!state.currentUser) return;

      state.currentUser.favorites = state.currentUser.favorites.filter(
        (item) => item.id !== removeId
      );

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    addToWatchNext: (state, action) => {
      const movie = action.payload;
      if (!state.currentUser) return;

      state.currentUser.watchNext = state.currentUser.watchNext || [];
      state.currentUser.watchNext.push(movie);

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    removeWatchNext: (state, action) => {
      const removeId = action.payload;
      if (!state.currentUser) return;

      state.currentUser.watchNext = state.currentUser.watchNext.filter(
        (item) => item.id !== removeId
      );

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    recentlyViewed: (state, action) => {
      const movie = action.payload;
      if (!state.currentUser) return;

      state.currentUser.recentlyViewed = state.currentUser.recentlyViewed || [];

      const exists = state.currentUser.recentlyViewed.some(
        (m) => m.id === movie.id
      );

      if (!exists) {
        state.currentUser.recentlyViewed.push(movie);

        const index = state.users.findIndex(
          (user) => user.id === state.currentUser.id
        );
        state.users[index] = state.currentUser;

        localStorage.setItem('users', JSON.stringify(state.users));
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      }
    },

    removeRecent: (state, action) => {
      const removeId = action.payload;
      if (!state.currentUser) return;

      state.currentUser.recentlyViewed =
        state.currentUser.recentlyViewed.filter((item) => item.id !== removeId);

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    toggleTheme: (state) => {
      if (!state.currentUser) return;

      const newTheme = state.currentUser.theme === 'dark' ? 'light' : 'dark';
      state.currentUser.theme = newTheme;

      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    setTheme: (state, action) => {
      if (!state.currentUser) return;

      state.currentUser.theme = action.payload;
      const index = state.users.findIndex(
        (user) => user.id === state.currentUser.id
      );
      state.users[index] = state.currentUser;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
  },
});

export const {
  signup,
  login,
  logout,
  clearError,
  addToFavorite,
  removeFavorite,
  toggleTheme,
  setTheme,
  addToWatchNext,
  removeWatchNext,
  recentlyViewed,
  removeRecent,
} = authSlice.actions;

export default authSlice.reducer;

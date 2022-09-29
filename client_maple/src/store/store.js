// store/store.js

import { configureStore } from '@reduxjs/toolkit';
import themeSlice from "./reducers/themeSlice";
import message from './reducers/message';
import auth from './reducers/auth';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: auth,
    message: message,
  },
})
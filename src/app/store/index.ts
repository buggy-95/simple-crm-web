import { configureStore } from '@reduxjs/toolkit';

import systemReducer from './systemSlice';

const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

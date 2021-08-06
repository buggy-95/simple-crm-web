import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface SystemState {
//   logined: boolean;
//   enterRoute: string;
//   loginTime: string;
//   token: string;
// };

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    logined: false,
    enterRoute: '/',
    loginTime: '',
    token: '',
  },
  reducers: {
    logout: (state) => {
      return {
        ...state,
        token: '',
        logined: false,
        enterRoute: '/',
        loginTime: '',
      };
    },
    login: (state, action: PayloadAction<string>) => {
      state.logined = true;
      state.loginTime = 'now';
      state.token = action.payload as string;
    },
  },
});

export const { login, logout } = systemSlice.actions;

export default systemSlice.reducer;

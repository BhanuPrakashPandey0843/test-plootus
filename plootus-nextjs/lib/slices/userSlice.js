import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  profile: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUserToken, setUserProfile, setUserLoading } = userSlice.actions;
export default userSlice.reducer;

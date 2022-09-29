import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, user) => {
            state.user = user
        },
        logout: (state) =>{
            state.user = null
        }
    },
});

export const asyncLogin = (token, user) => (dispatch) => {
    AuthService.login(token, user)
    dispatch(login(user));
};

export const asyncLogout = (token, user) => (dispatch) => {
    AuthService.logout(token, user)
    dispatch(logout());
};

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
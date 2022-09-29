import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = !!user
    ? {
        username: user.username,
        isLoggedIn: user.isLoggedIn,
        roles: user.roles,
    }
    : {
        username: null,
        isLoggedIn: true,
        roles: null,
    };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username
            state.isLoggedIn = action.payload.isLoggedIn
            state.roles = action.payload.roles
        },
        logout: (state) => {
            state.username = null
            state.isLoggedIn = false
            state.roles = null
        }
    },
});

export const asyncLogin = (token, user) => (dispatch) => {
    AuthService.login(token, user);
    dispatch(login(user));
};

export const asyncLogout = (token, user) => (dispatch) => {
    AuthService.logout(token, user);
    dispatch(logout());
};

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
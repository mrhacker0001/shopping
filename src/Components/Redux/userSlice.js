import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    emailorPhone: '',
    password: '',
    passwordlogin: '',
    emailorPhonelogin: '',

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const { name, emailorPhone, password, emailorPhonelogin, passwordlogin } = action.payload;
            state.name = name;
            state.emailorPhone = emailorPhone;
            state.password = password;
            state.passwordlogin = passwordlogin;
            state.emailorPhonelogin = emailorPhonelogin;


            localStorage.setItem('user', JSON.stringify(state));
        },
        loadUserFromLocalStorage(state) {
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                return JSON.parse(savedUser);
            }
            return initialState;
        }
    }
});

export const { setUser, loadUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;

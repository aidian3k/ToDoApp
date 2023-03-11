import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../model/logic/User";

const initialState:{value: User} = {value: {email: '', password: '', tasks: [], id: 0}};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.value = action.payload;
        },
        signOut: (state) => {
            state.value = initialState.value;
        }
    }
});

export const {login, signOut} = userSlice.actions;
export default userSlice.reducer;
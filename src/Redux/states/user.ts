import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = { 
    id: 0,
    name: '',
    email: ''
}

export const userSilice = createSlice({
    name: 'user',
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) => action.payload ,

        updateUser: (state, action) => ({...state, ...action.payload}),
        
        resetUser: () => EmptyUserState,
    }
});

export const { createUser, updateUser, resetUser } = userSilice.actions;

export default userSilice.reducer;
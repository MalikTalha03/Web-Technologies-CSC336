import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
        name: 'userInfo',
        initialState: [],
        reducers: {
            addUser:(state,action) => {
            },
            displayUser:() => {}
        }
    }
);

export default userSlice.reducer;
export const { addUser, displayUser } = userSlice.actions;
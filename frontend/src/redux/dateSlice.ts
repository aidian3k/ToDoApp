import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {value: ''};
export const dateSlice = createSlice({
    name: 'date',
    initialState: initialState,
    reducers: {
        changeDate: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const {changeDate} = dateSlice.actions;
export default dateSlice.reducer;
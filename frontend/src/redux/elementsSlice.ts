import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ToDo} from "../model/logic/ToDo";

const initialState = {value: [] as ToDo[]};
export const elementsSlice = createSlice({
    name: 'elements',
    initialState: initialState,
    reducers: {
        initializeAllElements: (state, action: PayloadAction<ToDo[]>) => {
            state.value = action.payload;
        },
        deleteOneElement: (state, action: PayloadAction<Number>) => {
            state.value = state.value.filter(element => element.id !== action.payload);
        }
    }
});

export default elementsSlice.reducer;
export const {initializeAllElements, deleteOneElement} = elementsSlice.actions;
import {configureStore} from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import dateReducer from './dateSlice';
import elementsReducer from './elementsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        date: dateReducer,
        elements: elementsReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
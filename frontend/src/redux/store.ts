import {configureStore} from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import dateReducer from './dateSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        date: dateReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
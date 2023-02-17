import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ReactotronConfig from '../config/ReactotronConfig';

import movieReducers from './movie';

import { apiSlice } from '../services/tmdb';

const rootReducer = combineReducers({
    movieReducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    enhancers: [ReactotronConfig.createEnhancer!()],
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            apiSlice.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
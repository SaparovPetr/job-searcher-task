import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from "react-redux";
import { formSlice } from "./slices/formSlice";
import { vacanciesApi } from "./vacanciesApi";

const store = configureStore({
	reducer: combineReducers({
		[vacanciesApi.reducerPath]: vacanciesApi.reducer,
		[formSlice.name]: formSlice.reducer,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(vacanciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => dispatchHook();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { foodReducer } from "@/redux/slices/foodSlice";
import { orderReducer } from "../slices/orderSlice";

export const store = configureStore({
    reducer: {
        food: foodReducer,
        order: orderReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "@/interfaces/order";

interface OrderState {
    orderList: Order[];
}

const initialState: OrderState = {
    orderList: []
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orderList.push(action.payload);
        },
        deleteOrder: (state, action: PayloadAction<string>) => {
            state.orderList = state.orderList.filter((order) => order.id !== action.payload);
        },
        updateStatus: (state, action: PayloadAction<{ id: string; status: Order["status"] }>) => {
            const order = state.orderList.find((order) => order.id === action.payload.id);
            if (order) {
                order.status = action.payload.status;
            }
        }
    }
});

export const { addOrder, deleteOrder, updateStatus } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
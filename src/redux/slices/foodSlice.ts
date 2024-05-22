import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Food } from "@/types/food";

interface FoodState {
    foodList: Food[];
}

const initialState: FoodState = {
    foodList: []
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<Food>) => {
            state.foodList.push(action.payload);
        },
        deleteFood: (state, action: PayloadAction<string>) => {
            state.foodList = state.foodList.filter((food) => food.id !== action.payload);
        },
        clearList: (state) => {
            state.foodList = [];
        }
    }
});

export const { addFood, deleteFood, clearList } = foodSlice.actions;
export const foodReducer = foodSlice.reducer;

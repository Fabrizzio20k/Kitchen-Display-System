"use client";
import { useAppSelector } from "@/redux/store/store";
import ButtonGoBack from "@/components/buttons/ButtonGoBack";
import CreateOrderForm from "@/components/CreateOrderForm";
import FoodListed from "@/components/FoodListed";


export default function CreateOrder() {

    const foodListState = useAppSelector((state) => state.food.foodList);

    return (
        <div className="flex flex-col h-screen items-center py-8 mx-4 md:mx-10 lg:mx-20 font-poppins text-white relative">
            <ButtonGoBack />
            <h1 className="text-xl font-bold pb-8">Create an order - {foodListState.length} {foodListState.length === 0 || foodListState.length > 1 ? "items" : "item"} added</h1>
            <div className="flex flex-col md:flex-row w-full items-center md:items-start md:space-x-8 space-y-8 md:space-y-0">
                <CreateOrderForm />
                <FoodListed />
            </div>

        </div>
    );
}
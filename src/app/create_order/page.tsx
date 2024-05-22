"use client";
import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { deleteFood } from "@/redux/slices/foodSlice";
import ButtonGoBack from "@/components/buttons/ButtonGoBack";
import CreateOrderForm from "@/components/CreateOrderForm";


export default function CreateOrder() {

    const foodListState = useAppSelector((state) => state.food.foodList);
    const dispatch = useAppDispatch();

    const handleDeleteFood = (id: string) => {
        dispatch(deleteFood(id));
    }

    return (
        <div className="flex flex-col h-screen items-center py-8 mx-4 md:mx-10 lg:mx-20 font-poppins text-white relative">
            <ButtonGoBack />
            <h1 className="text-xl font-bold pb-8">Create an order - {foodListState.length} {foodListState.length === 0 || foodListState.length > 1 ? "items" : "item"} added</h1>
            <div className="flex flex-col md:flex-row w-full items-center md:items-start">
                <CreateOrderForm />
                <div className="flex flex-col w-1/2 p-8">
                    <div className="w-full mx-auto p-4 border border-gray-300 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-center">
                            Food list
                        </h2>
                        {foodListState.length === 0 && (
                            <p className="text-lg text-center mt-4">
                                No food added yet
                            </p>
                        )}
                        {foodListState.length > 0 && (
                            <ul className="list-disc list-inside text-lg mt-2">
                                {foodListState.map((food) => (
                                    <div key={food.id} className="flex justify-between space-y-2">
                                        <li key={food.id}>{food.name} - {food.requirements} - {food.quantity}</li>
                                        <button className="bg-red-500 text-white rounded-md p-2" onClick={() => handleDeleteFood(food.id)}>
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
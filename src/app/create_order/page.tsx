"use client";
import { Food } from "@/types/food";
import { Order } from "@/interfaces/order";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { addFood, deleteFood, clearList } from "@/redux/slices/foodSlice";
import { useRouter } from "next/navigation";


export default function CreateOrder() {

    const router = useRouter();

    const foodListState = useAppSelector((state) => state.food.foodList);
    const dispatch = useAppDispatch();

    const handleDeleteFood = (id: string) => {
        dispatch(deleteFood(id));
    }

    const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const newOrder: Order = {
            id: uuidv4(),
            customerName: formData.get("servedBy") as string,
            foods: foodListState,
            status: "pending"
        };

        console.log(newOrder);
    }

    const handleFoodSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(form);

        let newFood: Food = {
            id: uuidv4(),
            name: formData.get("foodName") as string,
            requirements: formData.get("foodRequirements") as string,
            quantity: parseInt(formData.get("foodQuantity") as string),
        };
        dispatch(addFood(newFood));
        //form.reset();
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Create an order - {foodListState.length} food(s) added</h1>
            <div className="flex flex-row items-center justify-center w-full  px-8 py-8 space-x-8">
                <form onSubmit={handleFoodSubmit} className=" flex flex-col gap-4 w-1/2 mx-auto p-4 border border-gray-300 rounded-md shadow-md">
                    <input type="text" name="foodName" placeholder="Food name" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="text" name="foodRequirements" placeholder="Food requirements" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="number" name="foodQuantity" placeholder="Quantity" className="w-full border border-gray-300 rounded-md p-2" />
                    <button type="submit" className=" bg-green-500 text-white rounded-md p-2">Submit</button>
                </form>
                <div className="flex flex-col justify-center items-center w-1/2">
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
            <div className="flex flex-col items-center w-1/2 mx-auto">
                <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4 w-full mx-auto p-4 border border-gray-300 rounded-md shadow-md">
                    <input type="text" name="servedBy" placeholder="Customer name" className="w-full border border-gray-300 rounded-md p-2" />
                    {foodListState.length > 0 && (
                        <div>
                            <button className="bg-blue-500 text-white rounded-md p-2 mt-4" onClick={() => dispatch(clearList())}>
                                Clear food list
                            </button>
                            <button className="bg-blue-500 text-white rounded-md p-2 mt-4">
                                Submit new order
                            </button>
                        </div>
                    )}
                </form>
            </div>

            <button className="bg-blue-500 text-white rounded-md p-2 mt-4" onClick={() => router.push("/")}>
                Go back
            </button>

        </div>
    );
}
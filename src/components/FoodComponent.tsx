import { Food } from "@/types/food";
import { useState } from "react";

interface FoodComponentProps {
    food: Food;
}

export default function FoodComponent({ food }: FoodComponentProps) {
    const [foodState, setFoodState] = useState<Food>(food);

    const handleChangeStatus = (status: 'done' | 'preparing' | 'pending') => {
        setFoodState({ ...foodState, status });
    };

    return (
        <div className="flex flex-col hover:bg-slate-400 border-b-2 py-2">
            <div className="flex flex-row w-full">
                <h2 className="w-fit font-bold text-3xl px-2">
                    {foodState.quantity}
                </h2>
                <div className="flex flex-col w-full px-2">
                    <h2 className="text-2xl font-bold">{foodState.name}</h2>
                    <p>Requirements: {foodState.requirements}</p>
                    <div className="flex flex-row justify-start space-x-4 mt-2">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleChangeStatus('done')}>
                            Done
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleChangeStatus('pending')}>
                            Cancel
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleChangeStatus('preparing')}>
                            Prepare
                        </button>
                    </div>
                </div>
                <h3 className="w-fit px-2"> {foodState.status} </h3>
            </div>
        </div>
    );
}
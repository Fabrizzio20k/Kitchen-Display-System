import { Food } from "@/types/food";
import { useState } from "react";



export default function FoodComponent({ food }: { food: Food }) {
    return (
        <div className="flex flex-col hover:bg-slate-400 border-b-2 py-2">
            <div className="flex flex-row w-full">
                <h2 className="w-fit font-bold text-3xl px-2">
                    {food.quantity}
                </h2>
                <div className="flex flex-col w-full px-2">
                    <h2 className="text-2xl font-bold">{food.name}</h2>
                    <p>Requirements: {food.requirements}</p>
                </div>
            </div>
        </div>
    );
}
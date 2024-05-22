"use client"

import FoodComponent from "./FoodComponent";
import { Order } from "@/interfaces/order";
import { useState } from "react";

export default function OrderComponent({ order }: { order: Order }) {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const getOrderBorderClass = (status: string) => {
        switch (status) {
            case "done":
                return 'border-green-500';
            case "preparing":
                return 'border-yellow-500';
            case "pending":
                return 'border-red-500';
            default:
                return '';
        }
    };

    const getOrderBackgroundColor = (status: string) => {
        switch (status) {
            case "done":
                return 'bg-green-400';
            case "preparing":
                return 'bg-yellow-400';
            case "pending":
                return 'bg-red-400';
            default:
                return '';
        }
    }

    return (
        <div className={`flex flex-col ${getOrderBorderClass(order.status)} border-2`}>
            <div className="flex flex-col">
                <div className={`flex flex-row justify-between p-5 ${getOrderBackgroundColor(order.status)}`}>
                    <h3 className="text-lg font-semibold">Order: {order.id}</h3>
                    <h3 className="text-lg font-semibold">Served by: {order.servedBy}</h3>
                    <h3 className="text-lg font-semibold">Status: {order.status}</h3>
                </div>
                <div className="flex flex-row justify-center space-x-4 my-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                        Mark as delivered
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                        Preparing
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                        Cancel
                    </button>
                </div>
            </div>

            <div className={`relative flex flex-col ${order.foods.length > 3 && !showAll ? "fade-container" : ""}`}>
                {order.foods.slice(0, showAll ? order.foods.length : 3).map((food) => (
                    <FoodComponent key={food.id} food={food} />
                ))}
            </div>
            {
                order.foods.length > 3 && (
                    <button
                        className={`mt-4 px-4 py-2 ${getOrderBackgroundColor(order.status)} text-white hover:bg-opacity-75 transition`}
                        onClick={handleToggleShowAll}
                    >
                        {showAll ? "Mostrar menos" : "Mostrar todo"}
                    </button>
                )
            }
        </div >
    );
}
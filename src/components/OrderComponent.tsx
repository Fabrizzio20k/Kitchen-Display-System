"use client"

import FoodComponent from "./FoodComponent";
import { Order } from "@/interfaces/order";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store/store";
import { updateStatus, deleteOrder } from "@/redux/slices/orderSlice";

export default function OrderComponent({ order }: { order: Order }) {
    const [showAll, setShowAll] = useState(false);
    const dispatch = useAppDispatch();

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
                return 'bg-green-300';
            case "preparing":
                return 'bg-yellow-200';
            case "pending":
                return 'bg-red-300';
            default:
                return '';
        }
    }

    const handleCurrentState = (id: string, status: string) => {
        switch (status) {
            case "done":
                dispatch(updateStatus({ id, status }));
            case "preparing":
                dispatch(updateStatus({ id, status }));
            case "pending":
                dispatch(updateStatus({ id, status }));
            default:
                return '';
        }
    }

    return (
        <div className={`flex flex-col ${getOrderBorderClass(order.status)} border-2 h-fit max-w-96 rounded-xl overflow-hidden`}>
            <div className="flex flex-col">
                <div className={`flex flex-row justify-between p-5 ${getOrderBackgroundColor(order.status)}`}>
                    <h3 className="text-md font-semibold test">Customer: {order.customerName}</h3>
                    <h3 className="text-md font-semibold test">{order.time}</h3>
                    <h3 className="text-md font-semibold test">Status: {order.status}</h3>
                </div>
                <div className="flex flex-row justify-center space-x-4 py-4 bg-white">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleCurrentState(order.id, "done")}>
                        Mark as delivered
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleCurrentState(order.id, "preparing")}>
                        Preparing
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleCurrentState(order.id, "pending")}>
                        Cancel
                    </button>
                </div>
            </div>

            <div className={`relative flex flex-col bg-white`}>
                {order.foods.map((food) => (
                    <FoodComponent key={food.id} food={food} />
                ))}
            </div>
        </div >
    );
}
"use client"

import FoodComponent from "./FoodComponent";
import { Order } from "@/interfaces/order";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store/store";
import { updateStatus } from "@/redux/slices/orderSlice";
import { ButtonOptions } from "./buttons/ButtonOptions";

export default function OrderComponent({ order }: { order: Order }) {
    const [showAll, setShowAll] = useState(false);
    const dispatch = useAppDispatch();

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

    const getTextColor = (status: string) => {
        switch (status) {
            case "done":
                return 'text-green-700';
            case "preparing":
                return 'text-yellow-700';
            case "pending":
                return 'text-red-700';
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
        <div className={`flex flex-col ${getOrderBorderClass(order.status)} border-2 h-96 w-80 rounded-xl overflow-hidden`}>
            <div className="flex flex-col">
                <div className={`flex flex-row justify-between p-4 w-full ${getOrderBackgroundColor(order.status)}`}>
                    <h3 className="text-md font-semibold w-4/12 flex items-center justify-center">To: {order.customerName}</h3>
                    <h3 className="text-md font-semibold w-4/12 flex items-center justify-center border-l-2 border-r-2 border-slate-900">{order.time}</h3>
                    <h3 className={`text-md font-semibold w-4/12 flex items-center justify-center ${getTextColor(order.status)}`}>{order.status}</h3>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 py-4 bg-white text-sm">
                    <ButtonOptions color="#22C55E" textColor="#fff" hoverColor="#15803D" onClick={() => handleCurrentState(order.id, "done")}>
                        Delivered
                    </ButtonOptions>
                    <ButtonOptions color="#EAB308" textColor="#fff" hoverColor="#A16207" onClick={() => handleCurrentState(order.id, "preparing")}>
                        Preparing
                    </ButtonOptions>
                    <ButtonOptions color="#EF4444" textColor="#fff" hoverColor="#B91C08" onClick={() => handleCurrentState(order.id, "pending")}>
                        Cancel
                    </ButtonOptions>
                </div>
            </div>

            <div className={`relative flex flex-col bg-white h-96 overflow-y-scroll`}>
                {order.foods.map((food) => (
                    <FoodComponent key={food.id} food={food} />
                ))}
            </div>
        </div >
    );
}
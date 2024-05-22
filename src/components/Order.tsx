import FoodComponent from "./FoodComponent";
import { Order } from "@/interfaces/order";

export default function OrderComponent({ order }: { order: Order }) {
    return (
        <div className="test flex flex-col">
            <div className="flex flex-row justify-between">
                <h3>Order: {order.id}</h3>
                <h3>Served by: {order.servedBy}</h3>
                <h3>Status: {order.status}</h3>
            </div>
            <div className="flex flex-col">
                {order.foods.map((food) => (
                    <FoodComponent key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
}
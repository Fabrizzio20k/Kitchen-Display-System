import OrderComponent from "@/components/Order";
import { Order } from "@/interfaces/order";
import { Food } from "@/types/food";

const foodList: Food[] = [
  { id: 1, name: "Pizza", requirements: "Extra cheese", quantity: 1, status: "pending" },
  { id: 2, name: "Burger", requirements: "Extra ketchup", quantity: 2, status: "preparing" },
  { id: 3, name: "Pasta", requirements: "Extra sauce", quantity: 1, status: "done" },
  { id: 4, name: "Salad", requirements: "Extra dressing", quantity: 1, status: "done" },
];

const order1: Order = {
  id: 1,
  servedBy: "John Doe",
  status: "pending",
  foods: foodList,
};

export default function Home() {
  return (
    <main className="h-screen items-center justify-center">
      <div className="flex flex-col w-full test py-20 overflow-y-auto overflow-x-hidden">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Welcome to the Kitchen Display System</h1>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
          <OrderComponent order={order1} />
        </div>
      </div>
    </main>
  );
}
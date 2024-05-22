"use client";

import OrderComponent from "@/components/OrderComponent";
import { FaCirclePlus } from "react-icons/fa6";
import { Order } from "@/interfaces/order";
import { useRouter } from "next/navigation";



const orderList: Order[] = [
  { id: "1", customerName: "John Doe", status: "pending", foods: [{ id: "1", name: "Pizza", quantity: 1, requirements: "Extra cheese" }] },
  {
    id: "2", customerName: "Jane Doe", status: "pending", foods: [{ id: "2", name: "Burger", quantity: 1, requirements: "No pickles" },
    { id: "3", name: "Fries", quantity: 1, requirements: "Extra salt" }]
  },
  { id: "3", customerName: "John Smith", status: "preparing", foods: [{ id: "4", name: "Chicken", quantity: 1, requirements: "Extra spicy" }] },
  {
    id: "4", customerName: "Jane Smith", status: "done", foods: [{ id: "5", name: "Salad", quantity: 1, requirements: "No onions" },
    ]
  },

];


export default function Home() {

  const router = useRouter();

  return (
    <main className="h-screen items-center justify-center mx-20">
      <button className="fixed bottom-4 right-4 px-4 py-2 text-green-600 transition">
        <FaCirclePlus size={60} onClick={() => {
          router.push("/create_order");
        }} />
      </button>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Welcome to the Kitchen Display System</h1>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ">
        {orderList.map((order) => (
          <OrderComponent key={order.id} order={order} />
        ))}
      </div>
    </main>

  );
}
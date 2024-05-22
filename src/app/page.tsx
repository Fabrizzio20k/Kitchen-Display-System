"use client";

import OrderComponent from "@/components/OrderComponent";
import { FaCirclePlus } from "react-icons/fa6";
import { Order } from "@/interfaces/order";
import { useRouter } from "next/navigation";



const orderList: Order[] = [
  {
    id: "1",
    customerName: "John Doe",
    foods: [
      {
        id: "1",
        name: "Burger",
        quantity: 1,
        requirements: "No onions",
      },
      {
        id: "2",
        name: "Fries",
        quantity: 100,
        requirements: "Extra salt",
      },
    ],
    status: "pending",
    time: "12:00 PM",
  },
  {
    id: "2",
    customerName: "Jane Doe",
    foods: [
      {
        id: "3",
        name: "Pizza",
        quantity: 1,
        requirements: "Extra cheese",
      },
      {
        id: "4",
        name: "Coke",
        quantity: 1,
        requirements: "No ice",
      },
    ],
    status: "preparing",
    time: "12:30 PM",
  },
  {
    id: "3",
    customerName: "John Smith",
    foods: [
      {
        id: "5",
        name: "Pasta",
        quantity: 1,
        requirements: "No cheese",
      },
      {
        id: "6",
        name: "Salad",
        quantity: 1,
        requirements: "No onions",
      },
    ],
    status: "done",
    time: "13:00 PM",
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
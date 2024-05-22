"use client";

import OrderComponent from "@/components/OrderComponent";
import ButtonCreateOrderComponent from "@/components/buttons/ButtonCreateOrderComponent";

import { useAppSelector } from "@/redux/store/store";


export default function Home() {
  const orderListState = useAppSelector((state) => state.order.orderList);

  return (
    <main className="h-screen items-center justify-center mx-4 md:mx-10 lg:mx-20 font-poppins py-8">
      <ButtonCreateOrderComponent />
      <div className="flex justify-center text-white">
        <h1 className="text-xl font-bold pb-8 text-center">Welcome to the Kitchen Display System -
          {
            ' ' + new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
            })
          }
        </h1>
      </div>
      {orderListState.length === 0 && (
        <div className="flex justify-center text-white h-1/2 items-center">
          <h1 className="text-lg font-bold pb-8 text-center">No orders to display. Why not create one?</h1>
        </div>
      )}
      {orderListState.length > 0 && (
        <div className="w-full flex items-center justify-center">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {orderListState.map((order) => (
              <OrderComponent key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
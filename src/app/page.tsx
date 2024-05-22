"use client";

import OrderComponent from "@/components/OrderComponent";
import ButtonCreateOrderComponent from "@/components/buttons/ButtonCreateOrderComponent";
import { ButtonOptions } from "@/components/buttons/ButtonOptions";
import { useAppSelector } from "@/redux/store/store";
import { useState, useEffect } from "react";
import { Order } from "@/interfaces/order";


export default function Home() {
  const orderListState = useAppSelector((state) => state.order.orderList);

  const [orderList, setOrderList] = useState<Order[]>(orderListState);

  const handleOrderList = (status: string) => {
    if (status === "all") {
      setOrderList(orderListState);
    } else {
      const filteredOrders = orderListState.filter((order) => order.status === status);
      const sortedOrders = filteredOrders.sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      });
      setOrderList(sortedOrders);
    }
  }

  useEffect(() => {
    setOrderList(orderListState);
  }, [orderListState]);

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
      <div className="flex flex-col md:flex-row md:space-y-0 space-x-4 space-y-4 py-8 justify-center">
        <ButtonOptions color="#22C55E" textColor="#fff" hoverColor="#15803D" onClick={() => handleOrderList("done")}>
          Delivered Orders
        </ButtonOptions>
        <ButtonOptions color="#EAB308" textColor="#fff" hoverColor="#A16207" onClick={() => handleOrderList("preparing")}>
          Preparing Orders
        </ButtonOptions>
        <ButtonOptions color="#EF4444" textColor="#fff" hoverColor="#B91C08" onClick={() => handleOrderList("pending")}>
          Pending Orders
        </ButtonOptions>
        <ButtonOptions color="#3B82F6" textColor="#fff" hoverColor="#1E40AF" onClick={() => handleOrderList("all")}>
          All Orders
        </ButtonOptions>
      </div>
      {orderList.length === 0 && (
        <div className="flex justify-center text-white h-1/2 items-center">
          <h1 className="text-lg font-bold pb-8 text-center">No orders to display</h1>
        </div>
      )}
      {orderList.length > 0 && (
        <div className="w-full flex items-center justify-center">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {orderList.map((order) => (
              <OrderComponent key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
import type { Metadata } from 'next'
import CreateOrder from './page';

export const metadata: Metadata = {
    title: "Create Order",
    description: "Create an order for the kitchen display system",
    icons: {
        icon: "/icons/icon.ico",
    }
};

export default function CreateOrderLayout() {
    return <CreateOrder />;
}
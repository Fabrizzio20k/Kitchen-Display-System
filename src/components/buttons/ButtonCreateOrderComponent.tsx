import { FaCirclePlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function ButtonCreateOrderComponent() {
    const router = useRouter();
    return (
        <button className="fixed bottom-4 right-4 px-4 py-2 z-10 text-green-700 transition" onClick={() => {
            router.push("/create_order");
        }}>
            <div className="flex items-center justify-center space-x-2 p-4 bg-green-100 shadow-md rounded-full hover:bg-green-300 duration-500">
                <span className="text-md font-bold">New Order</span>
                <FaCirclePlus size={30} />
            </div>
        </button>
    )
}
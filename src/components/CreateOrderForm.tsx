import { v4 as uuidv4 } from "uuid";
import { addFood, clearList } from "@/redux/slices/foodSlice";
import { addOrder } from "@/redux/slices/orderSlice";
import { Order } from "@/interfaces/order";
import { Food } from "@/types/food";
import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { IoFastFoodSharp } from "react-icons/io5";
import { ButtonOptions } from "@/components/buttons/ButtonOptions";

export default function CreateOrderForm() {

    const foodListState = useAppSelector((state) => state.food.foodList);
    const dispatch = useAppDispatch();

    const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const newOrder: Order = {
            id: uuidv4(),
            customerName: formData.get("servedBy") as string,
            foods: foodListState,
            status: "pending",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        dispatch(addOrder(newOrder));

        form.reset();
        dispatch(clearList());
    }

    const handleFoodSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(form);

        let newFood: Food = {
            id: uuidv4(),
            name: formData.get("foodName") as string,
            requirements: formData.get("foodRequirements") as string,
            quantity: parseInt(formData.get("foodQuantity") as string),
        };
        dispatch(addFood(newFood));
        //form.reset();
    }

    return (
        <div className="flex flex-col w-full md:w-1/2 p-4 bg-mainBlue-700 rounded-xl">
            <form onSubmit={handleFoodSubmit} className=" flex flex-col gap-4 w-full p-2">
                <label htmlFor="foodName" className="text-sm">Food Name</label>
                <input type="text" name="foodName" placeholder="Hot Dog" className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white" />
                <label htmlFor="foodName" className="text-sm">Extra requirements</label>
                <input type="text" name="foodRequirements" placeholder="No Ketchup" className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white" />
                <label htmlFor="foodName" className="text-sm">Quantity</label>
                <input type="number" name="foodQuantity" placeholder="2" className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white" />
                <button type="submit" className=" bg-green-500 text-white rounded-md p-2 flex flex-row justify-center items-center space-x-2">
                    <h3>Add food</h3>
                    <IoFastFoodSharp size={20} />
                </button>
            </form>

            <div className="flex flex-col items-center">
                <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4 w-full p-2">
                    <label htmlFor="foodName" className="text-sm">Customer name</label>
                    <input type="text" name="servedBy" placeholder="Pedro" className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white" />
                    {foodListState.length > 0 && (
                        <div className="flex flex-row items-center justify-center space-x-4">
                            <ButtonOptions color="#008BCC" textColor="#fff" hoverColor="#002333" onClick={() => dispatch(clearList())}>
                                Clear food list
                            </ButtonOptions>
                            <ButtonOptions color="#22C55E" textColor="#fff" hoverColor="#15803D">
                                Submit new order
                            </ButtonOptions>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
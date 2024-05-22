import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { addFood, clearList } from "@/redux/slices/foodSlice";
import { addOrder } from "@/redux/slices/orderSlice";
import { Order } from "@/interfaces/order";
import { Food } from "@/types/food";
import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { IoFastFoodSharp } from "react-icons/io5";
import { ButtonOptions } from "@/components/buttons/ButtonOptions";

export default function CreateOrderForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { register: registerOrder, handleSubmit: handleSubmitOrder, formState: { errors: errorsOrder }, reset: resetOrder } = useForm();

    const foodListState = useAppSelector((state) => state.food.foodList);
    const dispatch = useAppDispatch();

    const handleFoodSubmit = (data: any) => {
        let newFood: Food = {
            id: uuidv4(),
            name: data.foodName,
            requirements: data.foodRequirements || "",
            quantity: parseInt(data.foodQuantity),
        };
        dispatch(addFood(newFood));
        reset();
    };

    const handleOrderSubmit = (data: any) => {
        const newOrder: Order = {
            id: uuidv4(),
            customerName: data.servedBy,
            foods: foodListState,
            status: "pending",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        dispatch(addOrder(newOrder));
        resetOrder();
        dispatch(clearList());
    };

    return (
        <div className="flex flex-col w-full md:w-1/2 p-4 bg-mainBlue-700 rounded-xl">
            <form onSubmit={handleSubmit(handleFoodSubmit)} className="flex flex-col gap-4 w-full p-2">
                <label htmlFor="foodName" className="text-sm">Food Name</label>
                <input
                    type="text"
                    {...register("foodName", { required: "Food name is required" })}
                    placeholder="Hot Dog"
                    className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white"
                />
                {errors.foodName && <span className="text-red-500 text-xs">{errors.foodName.message as string}</span>}

                <label htmlFor="foodRequirements" className="text-sm">Extra requirements</label>
                <input
                    type="text"
                    {...register("foodRequirements")}
                    placeholder="No Ketchup"
                    className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white"
                />

                <label htmlFor="foodQuantity" className="text-sm">Quantity</label>
                <input
                    type="number"
                    {...register("foodQuantity", {
                        required: "Quantity is required",
                        min: { value: 1, message: "Quantity must be at least 1" },
                        max: { value: 99, message: "Quantity must be less than 100" }
                    })}
                    placeholder="2"
                    className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white"
                />
                {errors.foodQuantity && <span className="text-red-500 text-xs">{errors.foodQuantity.message as string}</span>}

                <button type="submit" className="bg-green-500 text-white rounded-md p-2 flex flex-row justify-center items-center space-x-2">
                    <h3>Add food</h3>
                    <IoFastFoodSharp size={20} />
                </button>
            </form>

            <div className="flex flex-col items-center">
                <form onSubmit={handleSubmitOrder(handleOrderSubmit)} className="flex flex-col gap-4 w-full p-2">
                    <label htmlFor="servedBy" className="text-sm">Customer name</label>
                    <input
                        type="text"
                        {...registerOrder("servedBy", {
                            required: "Customer name is required",
                            maxLength: { value: 20, message: "Customer name must be less than 20 characters" }
                        })}
                        placeholder="Pedro"
                        className="bg-mainBlue-800 w-full border border-gray-300 rounded-md p-2 text-white"
                    />
                    {errorsOrder.servedBy && <span className="text-red-500 text-xs">{errorsOrder.servedBy.message as string}</span>}

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

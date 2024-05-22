import { IoFastFoodSharp } from "react-icons/io5";
import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { ButtonOptions } from "@/components/buttons/ButtonOptions";
import { deleteFood } from "@/redux/slices/foodSlice";

export default function FoodListed() {

    const foodListState = useAppSelector((state) => state.food.foodList);
    const dispatch = useAppDispatch();

    const handleDeleteFood = (id: string) => {
        dispatch(deleteFood(id));
    }

    return (
        <div className="flex flex-col w-full md:w-1/2">
            <div className="w-full mx-auto p-4 bg-mainBlue2-900 rounded-xl">
                <div className="text-2xl font-bold flex items-center justify-center space-x-4">
                    <h2>Food list</h2>
                    <IoFastFoodSharp size={20} />
                </div>
                {foodListState.length === 0 && (
                    <p className="text-lg text-center mt-4">
                        No food added yet
                    </p>
                )}
                {foodListState.length > 0 && (
                    <ul className="list-disc list-inside text-lg mt-2">
                        {foodListState.map((food) => (
                            <div key={food.id} className="flex justify-between space-y-2 items-center">
                                <h2 className="text-xl font-bold w-5/12">{food.quantity} x {food.name}</h2>
                                <p className="text-sm w-5/12">{food.requirements}</p>
                                <ButtonOptions color="#EF4444" textColor="#fff" hoverColor="#B91C08" onClick={() => handleDeleteFood(food.id)}>
                                    Delete
                                </ButtonOptions>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
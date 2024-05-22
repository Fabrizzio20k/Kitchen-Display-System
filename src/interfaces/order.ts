import type { Food } from "@/types/food";

export interface Order {
    id: number;
    servedBy: string;
    foods: Food[];
    status: "pending" | "preparing" | "done";
}
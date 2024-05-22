import type { Food } from "@/types/food";

export interface Order {
    id: number;
    customerName: string;
    foods: Food[];
    status: "pending" | "preparing" | "done";
}
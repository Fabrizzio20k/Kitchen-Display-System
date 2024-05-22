import type { Food } from "@/types/food";

export interface Order {
    id: string;
    customerName: string;
    foods: Food[];
    status: "pending" | "preparing" | "done";
}
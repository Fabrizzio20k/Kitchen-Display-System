export type Food = {
    id: number;
    name: string;
    requirements: string;
    quantity: number;
    status: "pending" | "preparing" | "done";
};
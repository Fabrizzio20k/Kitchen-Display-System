export type Food = {
    id: string;
    name: string;
    requirements: string;
    quantity: number;
    status: "pending" | "preparing" | "done";
};
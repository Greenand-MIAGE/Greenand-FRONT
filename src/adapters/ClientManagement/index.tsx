import { get } from "../xhr";

export const getClientById = () => {
    return get(`/client`);
}
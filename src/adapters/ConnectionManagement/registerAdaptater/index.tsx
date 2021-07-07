import { post } from "../../xhr";


export const signUp = (client) => {
    return post("/client", client)
}
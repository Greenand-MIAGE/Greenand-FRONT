import { post } from "../../xhr";

export const signIn = (client) => {
  return post("/login", client);
};

import { post, deleteAxios } from "../../xhr";

export const signIn = (client) => {
  return post("/login", client);
};

export const logout = () => {
  return deleteAxios("/logout", {});
};

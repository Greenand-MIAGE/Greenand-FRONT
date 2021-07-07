import { post } from "../../xhr";

export const createEvenement = (id, evenement) => {
  return post(`/activity/${id}`, evenement);
};

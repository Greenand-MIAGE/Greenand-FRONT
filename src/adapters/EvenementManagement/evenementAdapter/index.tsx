import { get, post, put } from "../../xhr";

export const createEvenement = (id, evenement) => {
  return post(`/activity/${id}`, evenement);
};

export const getEvenements = async () => {
  return get("/activities");
};

export const getEvenementById = async (id) => {
    return get(`/activity/${id}`)
}

export const reservationCreneau = (id, evenement) => {
    return put(`/reservation/${id}`, evenement);
}

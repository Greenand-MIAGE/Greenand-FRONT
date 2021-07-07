import { get, post } from "../../xhr";

export const getLands = () => {
  return get("/lands-client");
};

export const createLand = (land) => {
    return post("/land", land);
};

export const getLandById = async(id) => {
  return get(`/land/${id}`)
}

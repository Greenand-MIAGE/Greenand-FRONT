import { get, post } from "../../xhr";


export const getActivities = async() => {
    return get("/activities");
  };
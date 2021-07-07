import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLandById } from "../../../adapters/LandManagement/landAdaptater";
import LandList from "../LandListing/LandList";

function CreateActivity() {
  const { id } = useParams();

  const [lands, setLands] = useState();

  useEffect(() => {
    const fetchLand = async () => {
      const response = await getLandById(id);
      console.log(response.data);
      setLands(response.data);
    };
    fetchLand();
  }, []);

  return (
    <div>
      {lands &&
        ((land) => {
          return (
              <div key={land._id}>
                <hr />
                <h3>{land.street}</h3>
                <h3>{land.city}</h3>
                <h3>{land.postalCode}</h3>
                <h3>{land.surface}</h3>
                <h3>{land.client}</h3>
                <hr />
              </div>
          );
        })}
    </div>
  );
}

export default CreateActivity;

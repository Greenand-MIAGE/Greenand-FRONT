import React, { useEffect, useState } from "react";
import { getLands } from "../../../adapters/LandManagement/landAdaptater";
import LandList from "./LandList";

function Land() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
      const fetchLands = async () => {
          const response = await getLands();
          setLands(response.data);
      };
    fetchLands();
  }, []);

  return (
    <div>
      <h1>Land</h1>
      <LandList lands={lands} />
    </div>
  );
}

export default Land;

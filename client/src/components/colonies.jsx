import { useEffect, useState } from "react";
import { getColonyById, getColonyInventoryByColonyId } from "../scripts/apiManager";
import "./css/colonies.css"

export const Colonies = ({ selectedGovernor, refreshTrigger }) => {
  const [colony, setColony] = useState({});
  const [colonyInventories, setColonyInventories] = useState([]);

  useEffect(() => {
    if (selectedGovernor?.colonyid) {
   
      getColonyById(selectedGovernor.colonyid)
        .then((data) => setColony(data)) 
        .catch((err) => console.error("Error fetching colony info:", err));


      getColonyInventoryByColonyId(selectedGovernor.colonyid)
        .then((data) => setColonyInventories(data))
        .catch((err) => console.error("Error fetching colony inventory:", err));
    }
  }, [selectedGovernor, refreshTrigger]); 

  return (
    <div className="card colony-card">
      <h6 className="card-title">
        {selectedGovernor.name 
          ? `Governor ${selectedGovernor.name}'s Colony of ${colony.name}`
          : "Colony Minerals"}
      </h6>
      {colonyInventories.map((ci) => (
        <div key={ci.id} className="minerals-line">
          {ci.mineralQuantity} tonnes of {ci.mineral.name}
        </div>
      ))}
    </div>
);
};


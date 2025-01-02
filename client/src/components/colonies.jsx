import { useEffect, useState } from "react";
import {
  getColonyById,
  getColonyInventoryByColonyId,
} from "../scripts/apiManager";
import "./colonies.css"

export const Colonies = ({ selectedGovernor, refreshTrigger  }) => {
  const [colony, setColony] = useState([]);
  const [colonyInventories, setColonyInventories] = useState([]);
  useEffect(() => {
    getColonyInventoryByColonyId(colony.id).then((data) =>
      setColonyInventories(data)
    );
  }, [colony]);

  useEffect(() => {
    if (selectedGovernor?.colonyid) { 
      getColonyInventoryByColonyId(selectedGovernor.colonyid)
        .then((data) => setColonyInventories(data))
        .catch(err => console.error("Error fetching colony inventory:", err));
    }
  }, [selectedGovernor, refreshTrigger]);
  return (
  
    <div className="card colony-card">
    <h6 className="card-title">Colony {colony.name} Minerals</h6>
    {colonyInventories.map((ci) => {
      return (
        <div key={ci.id} className="minerals-line">
          {ci.mineralQuantity} tonnes of {ci.mineral.name}
        </div>
      );
    })}
  </div>
  );
};


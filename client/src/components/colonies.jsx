import { useEffect, useState } from "react";
import {
  getColonyById,
  getColonyInventoryByColonyId,
} from "../scripts/apiManager";
import "./colonies.css"

export const Colonies = ({ selectedGovernor }) => {
  const [colony, setColony] = useState([]);
  const [colonyInventories, setColonyInventories] = useState([]);
  useEffect(() => {
    getColonyInventoryByColonyId(colony.id).then((data) =>
      setColonyInventories(data)
    );
  }, [colony]);

  useEffect(() => {
    getColonyById(selectedGovernor.colonyid).then((data) => setColony(data));
  }, [selectedGovernor]);
  return (
  
      <div className="card colony-card">
      <h6 className="card-title colony-title"> Colony {colony.name} Minerals</h6>
      {colonyInventories.map((ci) => {
        return (
          <div key={ci.id} className="colonyMineralsLine">
            {ci.mineralQuantity} tonnes of {ci.mineral.name}
          </div>
        );
      })}
    </div>
  );
};


import { Governor } from "./components/governor";
import { Colonies } from "./components/colonies";
import { useState } from "react";
import { Facilities } from "./components/facilites";
import { SpaceCart } from "./components/orders";
import { BackgroundVideo } from "./components/backgroundVideo";
import "./App.css";
import { Title } from "./components/title";
import { FacilityInventory } from "./components/facilityInventory";

function App() {
  const [selectedGovernor, setSelectedGovernor] = useState({});
  const [selectedMineral, setSelectedMineral] = useState(null);
  const [selectedFacilityId, setSelectedFacilityId] = useState([]);
  const [selectedFacilityName, setSelectedFacilityName] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePurchaseComplete = () => {
    setSelectedMineral(null);
    const timestamp = new Date().getTime();
    setRefreshTrigger(timestamp);
  };

  return (
    <div className="App">
      <BackgroundVideo />
      <Title />
      <div className="big-three">
        <div className="governor-card">
          <Governor setSelectedGovernor={setSelectedGovernor} />
        </div>
        
        <div className="facility-card">
          <Facilities
            onMineralSelect={setSelectedMineral}
            selectedFacilityId={selectedFacilityId}
            setSelectedFacilityId={setSelectedFacilityId}
            selectedFacilityName={selectedFacilityName}
            setSelectedFacilityName={setSelectedFacilityName}
            refreshTrigger={refreshTrigger}
          />
        </div>

        <div className="colony-card">
          <Colonies 
            selectedGovernor={selectedGovernor} 
            refreshTrigger={refreshTrigger} 
          />
        </div>

        <div className="space-cart">
          <SpaceCart
            selectedMineral={selectedMineral}
            selectedGovernor={selectedGovernor}
            selectedFacilityId={selectedFacilityId[0]}
            onPurchaseComplete={handlePurchaseComplete}
          />
        </div>

        <div className="facility-minerals">
          <FacilityInventory
            selectedFacilityId={selectedFacilityId[0]}
            selectedFacilityName={selectedFacilityName}
            onMineralSelect={setSelectedMineral}
            refreshTrigger={refreshTrigger}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

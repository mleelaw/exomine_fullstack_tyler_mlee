import { Governor } from "./components/governor";
import { Colonies } from "./components/colonies";
import { useState } from "react";
import { Facilities } from "./components/facilites";
import { SpaceCart } from "./components/orders";
import { BackgroundVideo } from "./components/backgroundVideo";
import "./App.css"
import { Title } from "./components/title";
import { FacilityInventory } from "./components/facilityInventory";

function App() {
  const [selectedGovernor, setSelectedGovernor] = useState({});
  const [selectedMineral, setSelectedMineral] = useState(null); 
  const [selectedFacilityId, setSelectedFacilityId] = useState([]); 
  const [selectedFacilityName, setSelectedFacilityName] = useState("");

  return (
    <div className="App">
      <>
        <BackgroundVideo />
        <Title />
        <div className="big-three">
        <Governor setSelectedGovernor={setSelectedGovernor} />
        <Colonies selectedGovernor={selectedGovernor} />
        <Facilities onMineralSelect={setSelectedMineral} selectedFacilityId={selectedFacilityId} setSelectedFacilityId={setSelectedFacilityId} selectedFacilityName= {selectedFacilityName} setSelectedFacilityName={setSelectedFacilityName} /> 
        <FacilityInventory 
                        selectedFacilityId={selectedFacilityId[0]} 
                        selectedFacilityName={selectedFacilityName}
                        onMineralSelect={setSelectedMineral}
                    />
        </div>
        <SpaceCart selectedMineral={selectedMineral} />  
      </>
    </div>
  );
}

export default App;

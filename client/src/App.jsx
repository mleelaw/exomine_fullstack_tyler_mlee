import { Governor } from "./components/governor";
import { Colonies } from "./components/colonies";
import { useState } from "react";
import { Facilities } from "./components/facilites";
import { SpaceCart } from "./components/orders";

function App() {
  const [selectedGovernor, setSelectedGovernor] = useState({});
  const [selectedMineral, setSelectedMineral] = useState(null); 

  return (
    <div className="App">
      <>
        <Governor setSelectedGovernor={setSelectedGovernor} />
        <Colonies selectedGovernor={selectedGovernor} />
        <Facilities onMineralSelect={setSelectedMineral} /> 
        <SpaceCart selectedMineral={selectedMineral} />  
      </>
    </div>
  );
}

export default App;

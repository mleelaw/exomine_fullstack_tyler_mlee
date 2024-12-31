import "bootstrap/dist/css/bootstrap.css";
import { Governor } from "./components/governor";
import { Colonies } from "./components/colonies";
import { useEffect, useState } from "react";



function App() {
     const [selectedGovernor, setSelectedGovernor] = useState({})


  return (
    <div className="App">
      <>
        < Governor setSelectedGovernor={setSelectedGovernor} />
        <Colonies selectedGovernor = {selectedGovernor}/>
      </>
    </div>
  );
}

export default App;

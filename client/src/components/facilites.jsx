import { useEffect, useState } from "react";
import { getFacilities } from "../scripts/apiManager";
import { FacilityInventory } from "./facilityInventory";

export function Facilities({ onMineralSelect }) {
    const [facilities, setFacilities] = useState([]);
    const [selectedFacilityId, setSelectedFacilityId] = useState([]);  
    const [selectedFacilityName, setSelectedFacilityName] = useState("");

    useEffect(() => {
        getFacilities().then((data) => setFacilities(data));
    }, []);

    const handleFacilityChange = (evt) => {
        const id = parseInt(evt.target.value);
        setSelectedFacilityId([id]);
        const facility = facilities.find(f => f.id === id);
        setSelectedFacilityName(facility.name);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Facility Selection</h4>
                <select
                    className="form-select"
                    multiple
                    value={selectedFacilityId}
                    onChange={handleFacilityChange}
                >
                    <option value="" disabled>Select a facility</option>
                    {facilities.map((f) => (
                        <option key={f.id} value={f.id}>
                            {f.name}
                        </option>
                    ))}
                </select>
            </div>
            <FacilityInventory 
                selectedFacilityId={selectedFacilityId[0]} 
                selectedFacilityName={selectedFacilityName}
                onMineralSelect={onMineralSelect}
            />
        </div>
    );
}
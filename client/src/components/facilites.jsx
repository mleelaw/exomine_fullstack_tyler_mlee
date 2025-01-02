import { useEffect, useState } from "react";
import { getFacilities } from "../scripts/apiManager";
import { FacilityInventory } from "./facilityInventory";
import "./facilities.css"

export function Facilities({ onMineralSelect, selectedFacilityId, setSelectedFacilityId, setSelectedFacilityName,selectedFacilityName }) {
    const [facilities, setFacilities] = useState([]);


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
        <div className="card facility-card">
            <div className="card-body facility-body">
                <h4 className="card-title facility-title">Facility Selection</h4>
                <select
                    className="form-select facility-selection"
                    multiple
                    value={selectedFacilityId}
                    onChange={handleFacilityChange}
                >
                    {facilities.map((f) => (
                        <option key={f.id} value={f.id}>
                            {f.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
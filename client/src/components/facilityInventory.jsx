import { useEffect, useState } from "react";
import { getFacilityInventory } from "../scripts/apiManager";
import "./facilityInventory.css"

export function FacilityInventory({ selectedFacilityId, selectedFacilityName, onMineralSelect }) {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        getFacilityInventory().then((inv) => setInventory(inv));
    }, []);

    const facilityInventory = inventory.filter(
        (item) => item.facilityId === selectedFacilityId
    );

    const handleMineralClick = (mineralItem) => {
        onMineralSelect({
            name: mineralItem.mineral.name,
            id: mineralItem.mineral.id
        });
    };

    return (
        <div className="card facility-minerals">
            <div className="card-body facility-min-body">
                <h6 className="card-title facility-min-title">Available Mineral Inventory for {selectedFacilityName}</h6>
                {selectedFacilityId && (
                    <div>
                        {facilityInventory.map((item) => (
                            <button 
                                key={item.id}
                                className="btn btn-secondary m-1 facility-min-button"
                                onClick={() => handleMineralClick(item)}
                            >
                                {item.mineral?.name}: {item.mineralQuantity}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
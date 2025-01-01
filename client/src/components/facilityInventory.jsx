import { useEffect, useState } from "react";
import { getFacilityInventory } from "../scripts/apiManager";

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
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">Available Mineral Inventory for {selectedFacilityName}</h6>
                {selectedFacilityId && (
                    <div>
                        {facilityInventory.map((item) => (
                            <button 
                                key={item.id}
                                className="btn btn-secondary m-1"
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
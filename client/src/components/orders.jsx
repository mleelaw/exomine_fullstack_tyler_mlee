import { useState } from "react";
import { purchaseMineral } from "../scripts/apiManager";
import "./orders.css"

export function SpaceCart({ selectedMineral, selectedGovernor, selectedFacilityId, onPurchaseComplete }) {
    const [error, setError] = useState(null);

    const handlePurchase = async () => {
        try {
            await purchaseMineral(selectedFacilityId, selectedMineral.id, selectedGovernor.colonyid, 1);
            onPurchaseComplete();
        } catch (error) {
            setError(error.message);
            console.error("Purchase error:", error);
        }
    };

    return (
        <div className="card order-card">
            <div className="card-body order-card-body">
                <h6 className="card-title order-title">Space Cart</h6>
                {selectedMineral && (
                    <>
                        <div className="order-data">
                            Purchase 1 {selectedMineral.name}?
                        </div>
                        <button 
                            className="btn btn-secondary m-1 order-min-button"
                            onClick={handlePurchase}
                            disabled={!selectedGovernor?.colonyid}
                        >
                            Purchase
                        </button>
                        {error && (
                            <div className="alert alert-danger mt-2">
                                {error}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
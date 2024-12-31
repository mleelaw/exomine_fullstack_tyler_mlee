import { useEffect, useState } from "react"
import { getColonyById, getColonyInventoryByColonyId } from "../scripts/apiManager"

export const Colonies = ({selectedGovernor}) => {
    const[colony, setColony] = useState([])
    const [colonyInventories, setColonyInventories] = useState([])
    useEffect(() => {
        getColonyInventoryByColonyId(colony.id).then((data) => setColonyInventories(data))
    }, [colony])

    useEffect(() => {
        getColonyById(selectedGovernor.
            colonyid
            ).then((data) => setColony(data))
    }, [selectedGovernor])
    return (<><div className="colonyMinerals">{colony.name} Minerals</div>
        {colonyInventories.map((ci) => {return <div className = "colonyMineralsLine" >{ci.mineralQuantity} tonnes of {ci.mineral.name}</div>})}
        </>
    )
}
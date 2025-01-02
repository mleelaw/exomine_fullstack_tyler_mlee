import { useEffect, useState } from "react"
import { getGovernors } from "../scripts/apiManager"
import "./css/governor.css"

export const Governor = ({setSelectedGovernor}) => {
    const [governors, setGovernors] = useState([])

    const changeActiveGovernor = (event) => {
        const foundGovernor = governors.find((c) => c.id == event.target.value);
        setSelectedGovernor(foundGovernor);
    };

    useEffect(() => {
        getGovernors().then((data) => {
            setGovernors(data)
        })
    }, [])

        return (
            <div className="card governor-card">
                <div className="card-body">
                    <h4 className="card-title">Governor Selection</h4>
                    <select 
                        className="selection-base governor-selection" 
                        multiple 
                        onChange={changeActiveGovernor}
                    >
                        {governors.map(g => (
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
}
import { useEffect, useState } from "react"
import { getGovernors } from "../scripts/apiManager"
import "./governor.css"

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
            <div className="card-body governor-card-body">
                <h4 className="card-title governor-title">Governor Selection</h4>
                <select 
                    className="form-select governor-selection" 
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
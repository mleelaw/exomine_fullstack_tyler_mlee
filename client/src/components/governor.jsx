import { useEffect, useState } from "react"
import { getGovernors } from "../scripts/apiManager"

export const Governor = ({setSelectedGovernor}) => {
    const [governors, setGovernors] = useState([])

     const changeActiveGovernor = (event) => {
        const foundGovernor = governors.find((c) => c.id == event.target.value)
        setSelectedGovernor(foundGovernor)
    }

        useEffect(() => {
            getGovernors().then((data) => {
                console.log(data);
                setGovernors(data)
            })
        }, [])
        return (<select class="form-select" multiple onChange={changeActiveGovernor} > <option selected> Governors! </option>
        {governors.map((g) => {
            return (<option value = {g.id}>{g.name}</option>)
        })}
        </select>)
}
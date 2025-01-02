import "./css/title.css"
import { FaRocket } from "react-icons/fa"; 

export const Title = () => {
    return(
        <div className="title-container">
            <h4 className="exomine-title">Exomine</h4>
            <FaRocket className="rocket-icon" />
        </div>
    )
}
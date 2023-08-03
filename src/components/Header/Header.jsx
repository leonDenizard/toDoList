import { Date } from "./Date";
import imgProfile from "../../assets/8185711.png"

export function Header(){

    return(
        <header>
            <Date></Date>
            <div>
                <img src={imgProfile} alt="Profile image"/>
            </div>
        </header>
    )
}
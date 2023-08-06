import { DateComponent } from "./DateComponent";
import imgProfile from "../../assets/8185711.png"

export function Header(){

    return(
        <header className="flex justify-between items-center">
            <DateComponent></DateComponent>
            <div className="relative w-16 border-2 border-purple-300 rounded-full p-0.5">
                <img src={imgProfile} alt="Profile image" className="max-w-full"/>
            </div>
        </header>
    )
}
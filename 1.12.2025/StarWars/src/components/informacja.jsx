import { useContext } from "react";
import {NazwaMotywu} from '../App'

export default function Informacje(){
    const {stronamocy} = useContext(NazwaMotywu);
    return(<>
    <div>Aktualny motyw to {stronamocy === "ciemny" ? "Lord Smith" : "Jedi"}</div>
    </>)
}
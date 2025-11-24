import { useState, useEffect } from "react"
import "./DownloadData.css"
import axios from "axios"
//npm install axios
export default function DownLoadDataAxios({par}){

    const [data, setData] = useState([])

    useEffect(()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/todos/", {params:{ id: par}})
        .then(odppoweidz=>setData(odppoweidz.data))
    },[])

return(<>
    <h2>pobieranie danych ze zdalnego REST API</h2>
    <p>https://jsonplaceholder.typicode.com/todos</p>

    <hr />
    <ul>

    </ul>
    {
        data.map((el)=>(
            <li key={el.id}>
                tytuł: <i>{el.title}</i> <b className={el.completed===true ? "czerwony" : "pomarancz"}>
                {el.completed===true ? "zakończono": "w opracowaniu"}
                </b>

            </li>
        ))
    }
</>)

}

import { useState, useEffect } from "react"
import "./DownloadData.css"
export default function DownLoadData(){

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(odppoweidz=>odppoweidz.json())
        .then(odppoweidz=>setData(odppoweidz))
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

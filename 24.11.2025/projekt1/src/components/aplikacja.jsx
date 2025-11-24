import { useState } from "react"
export default function Aplikacja(){

    const [inputValue, setInputValue] = useState("")
    const [todoList, setToDoList] = useState([])//po kliknieciu dodaje do tablicy wartosc value z formularza


    return(
        <>
            <div>
                <input onChange={(e)=>setInputValue(e.target.value)} />
                <button onClick={()=>setToDoList([...todoList, inputValue])}>DODAj</button>
            </div>
            <hr />
            <ul>
                {
                todoList.map((el,index)=>(
                    <li key={index}>
                        {el}
                    </li>
                ))
            } 
            </ul>
               
        </>
    )
}
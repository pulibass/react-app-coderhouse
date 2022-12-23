import {useState} from "react";
export default function ItemCount(props){

    const [click, setClick] = useState(0);
 function sumClick(){
        setClick(click + 1)
    }
    function restClick(){
        setClick(click - 1)
    }
    return(

        <div>
            <button disabled={click === 10} onClick={sumClick}>+</button>
            <span>{click}</span>
            <button disabled={click <= 0} onClick={restClick}>-</button>
        </div>
    )
}
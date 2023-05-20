import { Countlabel } from "./countLabel.js";
import { useState } from "react";

export default function Apps(){
const [count,setCount] = useState(0)

return (
    <>
    <button onClick={ () => setCount(count + 1)}>iNCREAMENT </button>
    <button onClick={ () => setCount(count - 1)}>DECREAMENT </button>
     <Countlabel count={count}/>
    </>
   
)
}

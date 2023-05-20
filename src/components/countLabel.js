import { useState } from "react";

export default function CountLabel({ count }){
 const [prevcCount,setPrevCount] = useState(count);
 const [trend,setTrend] = useState(null)
 if(prevCount !== count){
    setPrevCount=({count});
    setTrend(count > prevCount ? 'Increasing' : 'Decreasing')
 }
 // 'trend' && is truthy (e.g., not null, undefined, false, 0, or an empty string)
 return(
<>
<h1>{count}</h1>
{trend &&<p>the count is {trend}</p>}

</>
 )

 }
import React, { useEffect, useState } from 'react'
import axios from "axios"


export const Axios = () => {
    const [udata,setData]=useState([]);
    // const c =0;
    const [entryCount, setEntryCount] = useState(0);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response)
            setData(response.data)
            const count = Object.keys(response).length; // Assuming your JSON file is an object, count its keys
        setEntryCount(count);
            // c++;
        })

    },[])
  return (
    <div>
hello
{udata.map((data)=>{
    return(
        <div>{data.title}</div>
    )
})



}
Number of entries : {entryCount}
    </div>
  )
}

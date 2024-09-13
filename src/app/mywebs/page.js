"use client"
import { useEffect, useState } from "react"
// import $ from "jquery"
// import  "jquery-ui/ui/widgets/draggable"

export default function About(){

    let [boxes, setboxes]=useState(["musa","raza"])
    useEffect(()=>{
     
      // $(".box").draggable();

      }, [boxes])

    return <div> 
        {
         boxes.map((data , i) => {
            return <div key={i} className="box" style={{height :"100px", width: "100px", background: "red",}}>{data}</div>
         } )
        }
          <button onClick={()=>{
            let name=prompt("name ad kro")
            boxes.push(name)
            setboxes([...boxes])
          }}>Push</button>


</div>

}

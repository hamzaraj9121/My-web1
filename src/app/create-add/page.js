"use client"
import { useRef, useState } from "react"

export default function Page(){

    let main=useRef()
  let[init , final]= useState("Hamza");
     
       function reset(){
        final("")

       }
       function saveKaro(){
        main.current.style.color="red"
       }

    return<div>
    <h1>Hamza</h1>
    <input value={init}  ref={main} type="text"  onChange={(e)=>final(e.target.value)} /> 
    <button onClick={reset}>Reset</button>
    <button onClick={saveKaro}>color chagne</button>
    </div>
       
}
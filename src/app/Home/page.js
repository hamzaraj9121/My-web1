"use client";
import { toast } from "react-toastify"

export default function Home(){

  function but(){
     toast("error aya")
     toast("add to cart")
  }
  return <div>

      <h1> this page is Home Page</h1>

    <button onClick={but}> Click This Toast</button> 

    </div>
}
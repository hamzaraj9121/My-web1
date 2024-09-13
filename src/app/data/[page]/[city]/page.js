"use client"
import { useParams } from "next/navigation"

export default function Page (){
    let params=useParams();
    return <div>
        <h1>{params.city}</h1>
    </div>
}
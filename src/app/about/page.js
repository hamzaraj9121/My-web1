"use client";

import axios from "axios";

export default function About (){
    
    function click(){
        axios.post('/api/auth/route').then(function (resp){
            Console.log(resp.data)
            })
        
        
    }
    return <div>
        <button onClick={click}>Click Me </button>
    </div>
}
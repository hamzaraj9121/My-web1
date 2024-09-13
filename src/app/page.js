
"use client";
import Cards from "@/components/Cards/cards";
import { useEffect, useState } from "react";
import axios from "axios";

export default  function Home () {
    
    let [init,final] = useState([]); 
    useEffect(()=>{

        // let para = useParams()

        axios.get("https://fakestoreapi.com/products").then(function(resp){
            console.log(resp.data);
        final(resp.data) 
        })
        
    } ,[]) 
    // console.log(para);
    return <div style={{disply:"flex",flexWrap:"wrap", justifyContent:"space-around", }}>
     { init.map(function(product, i){
        
        return  <Cards key={i} adds={product}> </Cards>

      })
      
    
   }

</div>
}
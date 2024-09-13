"use client";
import { nayadataAya } from "../../../store/createSlice";
import { mainStore } from "../../../store/store";

  import { Provider, useDispatch, useSelector } from "react-redux";

export default function Homess(){
    return <Provider store={mainStore} >
<Test>
          
      
  </Test>
    </Provider>
}
function Test(){
   let disptch=useDispatch();
   let userKaName= useSelector(function (store){
      return store.userSlice.ads
   })
    let abc= useSelector(function(store){
     return store.createProduct.user.name
    })
   let saveData=()=>{ 
    
    let enterDta=prompt("Entr Data")
     disptch(nayadataAya(enterDta))
   }
   
    return <div>
     <button onClick={saveData}>Save Data</button>

     { <h1>{abc}</h1> }
    <ol>
        {
            userKaName.map((product ,meraindex)=>{
                return <li key={meraindex} onClick={()=>{disptch(removeProduct(meraindex));

                }}>{product.name} </li>
            })
        }
   </ol>
  </div>
}
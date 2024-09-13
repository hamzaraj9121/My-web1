import { Provider, useDispatch } from "react-redux"
import "./card.css"
import { addToCart } from "../../../store/createSlice";
import { mainStore } from "../../../store/store";
import { toast } from "react-toastify";
// import { adds } from "@/app/data"
export default function Cards(adds){
    return <Provider store={mainStore}>
        <ShowCards adds={adds}></ShowCards>
    </Provider>
}


function ShowCards({adds}){
    
    let cartDis=useDispatch();
        function addToCart(){
          toast("addToCart")
        }
    return<div className="card">
     
     
        {adds.adds.title}
        <img src={adds.adds.image}/>

        <button onClick={()=>{ cartDis(addToCart(adds.adds))  }}>Add to cart </button>
        </div>

}
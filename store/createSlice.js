import { createSlice } from "@reduxjs/toolkit";
export let userSlice=createSlice({
   name:"Hmza",
   initialState:{
    carts:[],
     ads:
     [
        
        
    ]
  },


  reducers:{
    nayadataAya:(puranaData,nayaData)=>{
        puranaData.ads.push({
            name:nayaData.payload
        })
    },
    addToCart:(puranaData,nayaData)=>{
        console.log(nayaData.payload)
        puranaData.carts.push(nayaData.payload)
    }
  }
})


export const {addToCart,nayadataAya} = userSlice.actions
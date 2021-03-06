import {createSlice } from '@reduxjs/toolkit'

const initialState:{shopItems:any[],cartDropDownIsOpen:boolean,checkedItemsNumber:number} = {
       cartDropDownIsOpen:false,
       checkedItemsNumber:0,
       shopItems :[
        {
          id: 1,
          name: "Branza",
          
          checked:false
        },
        {
          id: 2,
          name: "Oua",
       
          checked:false
        },
        {
          id: 3,
          name: "Varza",
       
          checked:false
        },
        {
          id: 4,
          name: "Cuie lemn",
         
          checked:false
        },
      ] ,
      
} 






export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
      
      changeDropDownMenuState(state){
        state.cartDropDownIsOpen = !state.cartDropDownIsOpen
      },
      
       addItemToCart(state,{payload}){
        const itemIndex = payload.itemIndex
        
      
      
          state.checkedItemsNumber +=  1
        
        state.shopItems[itemIndex].checked = !state.shopItems[itemIndex].checked

      

      
       },
       removeItemFromCart(state,{payload}){

        const itemIndex = payload.itemIndex
       
        
    

       
        

        state.checkedItemsNumber -=  1
           
   

        state.shopItems[itemIndex].checked = !state.shopItems[itemIndex].checked
       }

      
      
    },

})

export const { changeDropDownMenuState, addItemToCart , removeItemFromCart} = shopSlice.actions

export default shopSlice.reducer
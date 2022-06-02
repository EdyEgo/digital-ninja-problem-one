import {createSlice } from '@reduxjs/toolkit'

const initialState:{shopItems:any[],checkedItemsNumber:number} = {
       checkedItemsNumber:0,
       shopItems :[
        {
          id: 1,
          name: "Alice",
          city: "Bucharest",
          checked:false
        },
        {
          id: 2,
          name: "Bob",
          city: "Belgrade",
          checked:false
        },
        {
          id: 3,
          name: "Charlie",
          city: "Budapest",
          checked:false
        },
        {
          id: 4,
          name: "Dan",
          city: "Bucharest",
          checked:false
        },
      ]
} 






export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{

       changeCheckedOnItem(state,{payload}){
           const itemIndex = payload
           if(state.shopItems[itemIndex].checked) {
             // was previously checked 
             state.checkedItemsNumber -=  1
           }
           if(!state.shopItems[itemIndex].checked){
             // was previously not checked 
             state.checkedItemsNumber +=  1
           }
           state.shopItems[itemIndex].checked = !state.shopItems[itemIndex].checked
           
       }

      
      
    },

})

export const { changeCheckedOnItem} = shopSlice.actions

export default shopSlice.reducer
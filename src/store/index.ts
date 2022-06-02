import {configureStore} from  '@reduxjs/toolkit'

import shopReducer from './shop'


export const store = configureStore({
    reducer:{
 
        shop:shopReducer,
       
    }
})


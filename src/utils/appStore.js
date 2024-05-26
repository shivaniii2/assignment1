import tabReducer from "./resourceSlice"
import { configureStore } from "@reduxjs/toolkit"



const appStore = configureStore({
    reducer:{
        tabs : tabReducer
       
    }
})

export default appStore
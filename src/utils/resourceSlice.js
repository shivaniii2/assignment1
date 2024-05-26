import { createSlice } from "@reduxjs/toolkit"



const TabsSlice = createSlice({
    name:"resource",
    initialState:{
        resourcesTab : [],
        requestTab : [],
        usersTab :  []
    },
    reducers:{
        addResources:((state,action) =>{
            state.resourcesTab = action.payload
        }),
        addItemWithTagRequest : ((state,action)=>{
            state.requestTab = action.payload
        }),
        addItemWithTagUser : ((state,action)=>{
            state.usersTab = action.payload
        }),
        appendResource: ((state, action)=> {
            state.resourcesTab = [...state.resourcesTab, action.payload];
          })
        }
})

export const {addResources,addItemWithTagUser,addItemWithTagRequest,appendResource} = TabsSlice.actions
export default TabsSlice.reducer
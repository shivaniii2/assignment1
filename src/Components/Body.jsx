import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { AddResource } from './AddResource'

export const Body = ({loading}) => {
    
    
 let appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Home loading={loading}/>
    },
    {
        path:'/addResource',
        element:<AddResource/>
        
    }
 ])
 return(
    <>
     <RouterProvider router = {appRouter}/>
    </>
 )
}

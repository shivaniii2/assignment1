import React from 'react'
import { TopBar } from './TopBar'
import { Tabs } from './Tabs'

export const Home = ({loading}) => {
  return (
    <>
       <TopBar/>
        <Tabs loading={loading}/>
       
    </>

  )
}

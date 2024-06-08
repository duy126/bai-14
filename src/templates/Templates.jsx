import React from 'react'
import HeaderPage from '../components/HeaderPage'
import { Outlet } from 'react-router-dom'

const Templates = () => {
  return <div>
    <HeaderPage></HeaderPage>
    <Outlet></Outlet>
  </div>
}

export default Templates
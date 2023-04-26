import React, { lazy } from 'react'
import { Loadable } from '@/components'
import {
  Navigate,
  Route,
  Routes
} from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const Login = Loadable(lazy(async () => import('@/pages/login/login')))

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

import React, { lazy } from 'react'
import { Loadable } from '@/components'
import { BrowserRouter } from 'react-router-dom'
import {
  Navigate,
  Route,
  Routes
} from 'react-router'

const Login = Loadable(lazy(async () => import('@/pages/login/login')))
const Notifications = Loadable(lazy(async () => import('@/pages/notifications/notifications')))

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

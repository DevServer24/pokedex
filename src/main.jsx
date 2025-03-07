import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUp from './pages/sign-up/sign-up'
import SignIn from './pages/sign-in/sign-in'
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/sign-in', element: <SignIn /> },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

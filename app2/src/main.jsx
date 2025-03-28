import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category.jsx'
import Byeer from './components/Byeer.jsx'
import Myorder from './components/Myorder.jsx'
import Contact from './components/Contact.jsx'
import Seller from './components/Seller.jsx'
import  Login  from './components/Login.jsx'
import Signup from './components/Signup.jsx'
// import Getstarted from './components/Getstarted'
import { Getstarted } from './components/Getstarted'
import Sellerlogin from './components/Sellerlogin.jsx'

// import App from './App.jsx'
import './index.css'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='category' element={<Category />} />
      <Route path='category' element={<Category />} />
      <Route path='byeer' element={<Byeer />} />
      <Route path='myorder' element={<Myorder />} />
      <Route path='contact' element={<Contact />} />
      <Route path='seller' element={<Seller />} />
      <Route path='category/login' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='getstarted' element={<Getstarted />} />
      <Route path='seller/Sellerlogin' element={<Sellerlogin />} />
      
     
    
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Features/Footer'
import RoutLayout from './Components/RoutLayout'
import Menu from './Components/Features/Menu'
import Home from './Components/Features/Home'
import Nepalifood from './Components/Features/Nepalifood'
import Indianfood from './Components/Features/Indianfood'
import Chinesefood from './Components/Features/Chinesefood'
import About from './Components/Features/About'
const route = createBrowserRouter([{

  path:'/',
  element:<RoutLayout/>,
  children:[
    {index:true, element:<Home/>},
    {path: 'menu', element:<Menu/>},
    {path: 'about', element:<About/>},
    {path: '/menu/nepali-food', element:<Nepalifood/>},
    {path: '/menu/indian-food', element:<Indianfood/>},
    {path: '/menu/chinese-food', element:<Chinesefood/>},
  ]
}])
const App = () => {
  return (
      <RouterProvider router = {route}/>
  )
}

export default App

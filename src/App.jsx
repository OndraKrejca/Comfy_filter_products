import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductLists from './pages/ProductLists'
import Product from './pages/Product'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductLists />}></Route>
        <Route path='product/:id' element={<Product />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

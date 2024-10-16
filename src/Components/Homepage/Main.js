import React from 'react'
import "./Main.css"
import Header from './Header'
import Sales from './Sales'
import Category from './Category'
import BestSellingProducts from './BestSellingProducts'
import Music from './Music'

function Main() {
  return (
    <div>
      <Header />
      <Sales />
      <Category />
      <BestSellingProducts />
      <Music />
    </div>
  )
}

export default Main
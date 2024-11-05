import React from 'react'
import "./Main.css"
import Header from './Header'
import Sales from './Sales'
import Category from './Category'
import BestSellingProducts from './BestSellingProducts'
import Music from './Music'
import OurProducts from './OurProducts'
import NewArrival from './NewArrival'

function Main() {
  return (
    <div>
      <Header />
      <Sales />
      <Category />
      <BestSellingProducts />
      <Music />
      <OurProducts />
      <NewArrival />
    </div>
  )
}

export default Main
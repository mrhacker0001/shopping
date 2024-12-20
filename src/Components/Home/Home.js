import React from 'react'
import Header from './Header'
import Sales from './Sales'
import Category from './Category'
import BestSellingProducts from './BestSellingProducts'
import OurProducts from './OurProducts'
import NewArrival from './NewArrival'


function Home() {
    return (
        <div className='Home'>
            <Header />
            <Sales />
            <Category />
            <BestSellingProducts />
            <OurProducts />
            <NewArrival />
        </div>
    )
}

export default Home
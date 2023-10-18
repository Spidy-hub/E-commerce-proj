import React from 'react'
import {useSelector} from 'react-redux'
import HomeCard from '../Components/HomeCard'

function Home() {
  const productData = useSelector((state) => state.product)
  console.log(productData)
  const homeProductCartList = Array.isArray(productData) ? productData.slice(1, 4) : [];
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-3'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl md:text-7xl font-bold'>The Fasteat Delivery in <span className='text-red-500'>Your Home</span></h2>
            <p className='py-3 text-base'>By using environment variables, you can keep your sensitive data separate from your codebase and minimize the risk of exposing it accidentally. Additionally, when deploying your application, you can set environment variables in your production environment, ensuring that sensitive data remains protected.</p>
            <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded '>Order Now</button>
        </div>
        <div className='md:w=1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCartList[0] && homeProductCartList.map(el => {
              return(
                <HomeCard 
                key={el._id}
                id={el._id}
                image = {el.image}
                name = {el.name}
                price = {el.price}
                category = {el.category}
                />
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home
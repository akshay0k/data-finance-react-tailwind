import React from 'react'
import Laptop from '../Assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <div className='max-w-[1240px]  mx-auto grid md:grid-cols-2'>

            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" srcset="" />

            <div className='flex flex-col justify-center'>
                <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, consequatur laborum? 
                    Nobis doloremque reiciendis laudantium necessitatibus dolorum laborum quaerat!
                     Tempore maxime ratione, harum esse id blanditiis recusandae reiciendis eos sint!</p>
                 <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>

        </div>
        
    </div>
  )
}

export default Analytics
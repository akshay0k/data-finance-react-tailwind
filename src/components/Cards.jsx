import React from 'react'
import Single from "../Assets/single.png"
import Double from "../Assets/double.png"
import Triple from "../Assets/triple.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-4xl font-bold text-center'>59$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>250 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trail</button>
            </div>

            <div className='w-full shadow-xl flex flex-col bg-gray-100 p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-4xl font-bold text-center'>59$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>250 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black'>Start Trail</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className='text-4xl font-bold text-center'>59$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>250 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trail</button>
            </div>

        </div>

    </div>
  )
}

export default Cards 
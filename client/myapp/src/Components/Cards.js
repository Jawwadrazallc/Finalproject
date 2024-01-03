import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='grid grid-cols-4'>
        <div className='w-52 h-32 bg-red-300 flex justify-center  items-center font-bold'>1</div>
        <div className='w-52 h-32 bg-green-300 flex justify-center  items-center font-bold'>2</div>
        <div className='w-52 h-32 bg-blue-300 flex justify-center  items-center font-bold'>3</div>
        <div className='w-52 h-32 bg-orange-300 flex justify-center  items-center font-bold'>4</div>
    </div>
    </>
  )
}

export default Cards

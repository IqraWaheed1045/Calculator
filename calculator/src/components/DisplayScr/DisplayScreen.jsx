import React  from 'react'



const DisplayScreen = ({value}) => {
  return (
      <div className='w-[280px] h-[100px] text-[30px]  bg-gray-400  flex justify-end items-center px-2 rounded-lg bg-gradient-to-tr  from-gray-600 to-[99.99%] via-gray-600  to-yellow-600 '>
         {value}
      </div>
    
  )
}

export default DisplayScreen

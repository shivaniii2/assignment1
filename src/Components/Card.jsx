import React from 'react'

export const Card = (props) => {
  const{iconUrl,description,link,title,category} = props
  return (
   <>
   <div className='w-[26%] mt-8 mr-[5%] border border-gray-300 ' style={{ fontFamily: "'HK Grotesk', sans-serif" }} >
    <div className='flex'>
    <div className='p-4'>
      <img  className='w-11 h-11' src={iconUrl} alt="" />
    </div>
    <div className=' mt-3'>
    <span className='text-base'>{title}</span>
     <div className='text-gray-400 text-xs'>{category}</div>
    </div>
     
    </div>
    <div className='p-4 text-sm'>
    <span className=' text-blue-500'>{link}</span>
    <div className='mt-3 text-gray-400'>{description}</div>
    </div>
   
  
    
    
   </div>
   </>
  )
}

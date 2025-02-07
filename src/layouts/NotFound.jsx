// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    // tạo ra hàm đc trả về từ hôok
    const navigate = useNavigate()
    return (
      <div>
        <p className='font-bold text-3xl text-center'>NotFound</p>
  
        <button 
        onClick={() => {
          //navigate về HOME
          // navigate('/')
  
  
          //navigate về bất kỳ
          navigate('/layoutManager')
  
  
        }}
        className='px-3 py-2 bg-red-300'>Home</button>
      </div>
    )
  }

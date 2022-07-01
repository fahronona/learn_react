import React from 'react'
import {IoMdWater} from 'react-icons/io'
import {AiFillDollarCircle} from 'react-icons/ai'
import {MdOutlineElectricalServices,MdRouter} from 'react-icons/md'

export default function Transactionlist() {
    const todays=[{
        name:"Water Bill",
        status:"Unsuccessfully",
        price:"- $280"
    }]

    const yesterday=[{
        name:"Internet Bill",
        status:"Unsuccessfully",
        price:"- $280",
        icon:<MdRouter/>,
        color:"bg-red-400"
    },
    {
        name:"Salary Oct",
        status:"Income",
        price:"+ $5280",
        icon:<AiFillDollarCircle/>,
        color:"bg-blue-400"
    },

    {
        name:"Electric",
        status:"Unsuccessfully",
        price:"- $280",
        icon:<MdOutlineElectricalServices/>,
        color:"bg-indigo-400"
    },
    {
        name:"Jane Transfer",
        status:"Income",
        price:"+ $3880",
        icon:<AiFillDollarCircle/>,
        color:"bg-orange-400"
    }
]
  return (
   <div className='mt-10'>
    <h3>Today</h3>
    <div>
        {todays.map((val)=>{
            return <div className='flex flex-row items-start border-b border-b-gray-200 py-3 '>
            <div className='w-10 h-10 bg-indigo-400 rounded-lg flex items-center justify-center text-white mr-3 mt-1'>
                <IoMdWater/>
            </div>
            <div className='flex-1'>
              <div className='text-lg font-medium'>{val.name}</div>
              <div className='text-sm text-gray-400'>{val.status}</div>
            </div>
            <div className='text-red-600 justify-start mt-1'>{val.price}</div>
            </div>
        })}
    </div>
    <h3 className='mt-8'>Yesterday</h3>
    <div>
        {yesterday.map((val)=>{
            return <div className='flex flex-row items-start border-b border-b-gray-200 py-3 mb-2'>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3 mt-1 ${val.color}`}>
               {val.icon}
            </div>
            <div className='flex-1'>
              <div className='text-lg font-medium'>{val.name}</div>
              <div className='text-sm text-gray-400'>{val.status}</div>
            </div>
            <div className={`${val.status==="Income"?"text-green-600":"text-red-600"} justify-start m-1`}>{val.price}</div>
            </div>
        })}
    </div>
   </div>
  )
}

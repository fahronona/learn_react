import React from 'react'
import Logo from '../../assets/logo.png'
import {useState } from "react";
import {BiHomeAlt,BiGridAlt,BiCreditCardAlt,BiUser,BiCalculator} from 'react-icons/bi'
import {BsGear} from 'react-icons/bs'
export default function Sidebar() {
    
    const [indexMenu,setIndexMenu]= useState(0);
    const menu = [
        {name:"Home",icon:<BiHomeAlt/> },
        {name:"Account",icon:<BiGridAlt/>},
        {name:"Cards",icon:<BiCreditCardAlt/>},
        {name:"Contacts",icon:<BiUser/>},
        {name:"Loan Calculator",icon:<BiCalculator/>},
        {name:"Settings",icon:<BsGear/>}
    ]
    const schedulePayment=["Monthly Rent","Food Payment","Utility Bills"]


  return (
    <div className='h-screen border-r border-gray-200 w-64 px-9 space-y-24 '>
        <div className='flex flex-row items-center pt-8 '>
            <img src={Logo} alt="" className='w-9 h-9 mr-2'/>
            <div>React Banking</div>
        </div>

        <div className='space-y-24'>
        <div>
            <ul className='space-y-7'>
            <div className='mb-4 text-indigo-700 font-bold '>Menu</div>
                {
                menu.map((val,index)=>{
                    return(
                    <li  key={index} onClick={()=>{setIndexMenu(index)}}  className={indexMenu===index?"menu-active":"menu" } >
                     <div className='mr-5 '>{val.icon}</div>
                     <div>{val.name}</div>
                    </li>
                    );
                })
                }
            </ul>
        </div>
        <div>
            <div className='mb-7 text-indigo-700 font-bold'>Scheduled Payments</div>
            <div className='space-y-7'>
                {
                schedulePayment.map((val,index)=>{
                    return(
                    <div className='flex  mb-7 flex-row item-center'>
                    <div className='h-4 w-4 border border-gray-200 mr-4 rounded-full mt-1'></div>
                     <div className='text-gray-500'>{val}</div>
                     </div>
                    );
                })
                }
                </div>
        </div>
        </div>
    </div>
  )
}

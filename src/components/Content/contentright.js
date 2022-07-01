import React from 'react'
import {BiUser} from 'react-icons/bi'
import {GrNotification,} from 'react-icons/gr'
import visa from '../../assets/Visa Logo.png'
import Transactionlist from './transactionlist'

export default function Contentright() {
  return (
    <section className="w-96 bg-gray-50 rounded-tl-70px overflow-hidden px-14">
    <div className="pt-12 flex justify-end space-x-9 items-center">
     <GrNotification size={20}/>
     <BiUser size={20}/>
     <img src="https://fahronona.github.io/images/aboutme.png"
     alt="user"
     className="h-9 w-9 object-cover rounded-full"
     ></img>
    </div>
   <div className="card mt-10">
     <div className="relative p-5 text-white">
       <div className="font-bold">Fahron Onasutra</div>
       <div className="mt-4 space-y-1">
       <div>Amazon Platinum</div>
       <div>4756 *** *** 9810</div>
       <div className="flex  justify-between relative">
         <span>$34.965.432</span>
         <img src={visa} alt="visa" className="h-4"></img>
       </div>
       </div>
     </div>
   </div>
   <button className="py-3 rounded border  border-indigo-400 text-indigo-400 border-dashed w-full mt-10">
   Add new card</button>

   <Transactionlist/>
   </section>
  )
}

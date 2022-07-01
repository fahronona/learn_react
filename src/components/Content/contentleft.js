import React from 'react'
import {BiSearch,BiCreditCard,BiUser,BiDoughnutChart,BiHome,BiTrash} from 'react-icons/bi'
import {FiEdit2} from 'react-icons/fi'
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

export default function Contentleft() {

    

      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
          <div className='flex items-center px-4 text-white'>
            <BiTrash size={20}/>
            </div>
          </SwipeAction>
          <SwipeAction
           // destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
          <div className='flex items-center px-4 text-white'>
            <FiEdit2 size={20}/>
            </div>
          </SwipeAction>
        </TrailingActions>
      );

  return (
    <section className='px-14 flex-1 pt-12 h-screen overflow-scroll'>
        <div className='border border-gray-300 rounded-lg  flex  py-3 px-3 w-2/3'>
         <BiSearch className='mr-2' size={"18"} />
         <input type={"text"} className="flex-1" placeholder='Search' style={{outline:"none"}}></input>
        </div>
        <h3 className='text-xl text-indigo-700 my-8'>Welcome back Fahron!</h3>
        <div className='flex flex-row'>
       <Card
       bgColor={'bg-green-300'}
       textColor={'text-green-600'}
       icon={<BiCreditCard size={25} className='mb-2'/>}
       label={<span className='text-sm'>Transfer via <br/> Card number</span>}/>

       <Card
       bgColor={'bg-indigo-300'}
       textColor={'text-indigo-600'}
       icon={<BiDoughnutChart size={25} className='mb-2'/>}
       label={<span className='text-sm'>Transfer to another bank</span>}/>

       <Card
       bgColor={'bg-orange-300'}
       textColor={'text-orange-600'}
       icon={<BiUser size={25} className='mb-2'/>}
       label={<span className='text-sm'>Transfer to same bank</span>}/>

       <Card
       bgColor={'bg-teal-300'}
       textColor={'text-teal-600'}
       icon={<BiHome size={25} className='mb-2'/>}
       label={<span className='text-sm'>Transfer to another bank</span>}/>
       </div>


       <div className='mt-14'>
       {Array.from(Array(4)).map((_,index)=>
        <div className='mt-5  rounded-2xl bg-indigo-700'>
       <SwipeableList threshold={0.9} type={Type.IOS}>
        <SwipeableListItem
      
        trailingActions={trailingActions()}
        >
        <div className='bg-white p-4 rounded-xl border border-gray-200 w-full flex '>
        <img src="https://fahronona.github.io/images/aboutme.png"
     alt="user"
     className="h-8 w-8 object-cover rounded-full mr-3"
     ></img>
     <div className='text-sm'>
        <div className='text-gray-900'>Push</div>
        <div className='text-gray-400 text-xs'>09123456789</div>
     </div>
        </div>
        </SwipeableListItem>
        </SwipeableList>
        </div>
       )}

       </div>

       

    </section>
  )
}

function Card(props){
    return  <div className={`rounded-xl ${props.bgColor} bg-opacity-10 p-5 w-36 ${props.textColor} space-y-4 mr-6`}>
    {props.icon}
    <span className='text-sm'>{props.label}</span>
    </div>
    }

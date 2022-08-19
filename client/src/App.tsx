import { useState } from 'react'
import socketIO from 'socket.io-client';
import { IoIosChatbubbles, IoIosChatboxes, IoIosLogOut } from 'react-icons/io'
import { BsChatSquareQuoteFill } from 'react-icons/bs'
const socket = socketIO.connect('http://localhost:4000');

function App() {

  return (
    <div className='flex-col h-[100vh] bg-slate-600'>
      {/* Navbar */}
      {/* <div className='flex-col fixed w-[6rem] bg-gray-700 h-screen shadow-md'>
        <div className='flex justify-center py-[1rem]'>
          <IoIosChatbubbles size={'45px'} color={'green'}/> 
        </div>
        <div className='flex justify-center my-[10rem]'>
          <div className='flex-col'>
            <BsChatSquareQuoteFill color='white' size={'20px'}/>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg  " alt="Rounded avatar"/>
        </div>
      </div> */}

      <nav className="p-3 fixed w-full bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <div className='flex pt-[4rem] h-full'>
      {/* Chatbar */}
      <div className='flex-col bg-red-5 m-[1rem] w-[10rem]'>
        <p className='text-xl font-bold'>Active Users</p>
      </div>
      {/* Chat Body & Footer */}
      <div className='flex-col w-full'>
        <div className='flex py-[1rem]'>
          <p className='text-xl font-bold mr-auto mx-[1rem]'>Open Chat</p>
          <div className='flex mx-[1rem]'>
              <button className='bg-red-500 rounded-md p-1'><IoIosLogOut color='white' size={'25px'}/></button>
          </div>
        </div>
        <div className='flex max-w-full bg-red-400 m-2'>
          Chat Body
        </div>
        <div>
          Chat Footer
        </div>

      </div>
    </div>
    </div>
  )
}

export default App

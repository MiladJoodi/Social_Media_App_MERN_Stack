"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({ children }) {
  const [toggleSideBar, setToggleSideBar] = useState(true)
  return (
    <div>

      {/* This side bar used when screen size is medium or larger  */}
      <div className=' hidden md:w-64 md:block h-screen fixed'>
        <SideNav />
      </div>
      {/* This side bar used when screen size is smaller/mobile  */}
      {toggleSideBar &&
        <div className='bg-white absolute md:w-64 md:block h-screen 
        animate-in duration-700'>
          <SideNav toggleSideBar={() => setToggleSideBar(false)} />
        </div>}

        
      <div className='md:ml-64'>
        {/* Header  */}
        <Header toggleSideBar={() => setToggleSideBar(true)} />
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {/* user used render page route  */}
          <div className='md:col-span-2'>
            {children}
          </div>
          {/* Right Most Section of page */}
          <div className='p-5'>Side Section</div>
        </div>

      </div>

    </div>
  )
}

export default layout
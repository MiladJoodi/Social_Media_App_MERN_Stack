"use client"
import React from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs';

function Home() {

  const {user} = useUser();
  
  return (
    <div className='p-5'>
    {!user ? <Banner/>
    :null  
    }
    </div>
  )
}

export default Home
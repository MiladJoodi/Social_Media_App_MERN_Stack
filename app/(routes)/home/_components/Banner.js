import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='p-2 bg-white-400 
    rounded-xl shadow-sm flex items-center
    bg-blue-100
     border gap-5'>
        <Image src='/social-panda-1.png' width={200} height={200} alt='panda'/>
        <div>
        <h2 className='font-bold text-[29px] '>WELCOME TO SOCIAL PANDA</h2>
        <h2 className=''>Join Community, Create and Share your thought</h2>
        <Button className="mt-3 bg-blue-500">Get Started</Button>
        </div>
        
    </div>
  )
}

export default Banner
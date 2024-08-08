"use client"

import Image from 'next/image'
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Home() {

  const {user} = useUser();

  useEffect(()=>{
    user && createUserProfile();
  }, [user])

  const createUserProfile = ()=>{
    const data = {
      name: user.fullName,
      email: user.primaryEmailAddress.emailAddress,
      image: user.imageUrl
    }

    GlobalApi.createUser(data).then(resp=>{
      console.log(resp.data);
    })
  }
  
  return (
  <div>
    <UserButton />
  </div>
  )
}

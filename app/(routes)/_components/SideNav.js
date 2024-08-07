"use client";
import MenuList from "@/app/_utils/MenuList";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideNav({ toggleSideBar }) {
  const { user } = useUser();

  return (
    <div className=" h-full p-5 ">
      <Image src="/logo.svg" alt="logo" width={280} height={200} />

      <div className="flex flex-col mt-10">
        {MenuList.map((item, index) => (
          <Link href={item.path} onClick={() => toggleSideBar(false)}>
            <h2
              variant="ghost"
              className="group p-4 flex gap-5 items-center
                justify-start rounded-md cursor-pointer
                 hover:bg-slate-100 text-slate-500"
            >
              <item.icon className="group-hover:animate-bounce" />
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 flex gap-3 items-center">
          {!user ? (
            <Link href="/sign-up">
              <Button
                variant="ghost"
                className="flex gap-2 items-center cursor-pointer"
              >
                <LogIn />
                Sign In
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <UserButton /> Profile
            </div>
          )}
      </div>
    </div>
  );
}

export default SideNav;

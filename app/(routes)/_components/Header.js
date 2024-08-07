"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, MenuSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header({ toggleSideBar }) {
  const { user } = useUser();
  return (
    <div className="p-5 flex justify-between md:justify-end shadow-sm bg-white items-center">
      <Menu
        className="md:hidden h-7 w-7
         text-slate-500 cursor-pointer"
        onClick={() => toggleSideBar()}
      />

      {!user ? (
        <Link href="/sign-up">
          <Button
            className="bg-blue-500 
        hover:bg-blue-600 shadow-sm"
          >
            Get Started
          </Button>
        </Link>
      ) : (
        <UserButton />
      )}
    </div>
  );
}

export default Header;

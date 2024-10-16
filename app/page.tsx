"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Laptop } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import HomeBanner from '@/components/custom/homePage/banner';
import HomeFeatured from '@/components/custom/homePage/featured';
import HomeWhyUs from '@/components/custom/homePage/whyUs';
import HomeGetStarted from '@/components/custom/homePage/getStarted';
import HomeUsers from '@/components/custom/homePage/user';
import MainFooter from '@/components/custom/footer';
import MainNavBar from '@/components/custom/navBar';

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavBar/>

      <div className="container mx-auto">
        <HomeBanner/>
        <HomeFeatured/>
        <HomeWhyUs/>
        <HomeGetStarted/>
        <HomeUsers/>
      </div>

      <MainFooter/>
    </div>
  )
}
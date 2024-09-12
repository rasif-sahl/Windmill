"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { Github, MessageCircle, Menu, ChevronDown, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: 'Introduction', href: '#' },
  { title: 'Another Page', href: '#' },
  { 
    title: 'Advanced (A Folder)', 
    href: '#',
    children: [
      { title: 'Satori', href: '#' }
    ]
  },
  { title: 'About', href: '#' },
  { title: 'Contact', href: '#' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">My Project</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-900">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavItem key={item.title} item={item} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Input 
              type="search" 
              placeholder="Search documentation..." 
              className="w-64 bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            <Link href="#" className="text-gray-300 hover:text-white">About</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Contact</Link>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <aside className="hidden md:block w-64 pr-8">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
        <aside className="hidden lg:block w-64 pl-8">
          <h2 className="text-lg font-semibold mb-4">On This Page</h2>
          <nav className="space-y-2">
            <Link href="#what-is-nextra" className="block text-blue-400 hover:text-blue-300">What is Nextra?</Link>
            <Link href="#documentation" className="block text-blue-400 hover:text-blue-300">Documentation</Link>
          </nav>
        </aside>
      </div>

      <footer className="border-t border-gray-800 mt-12 py-6 text-center text-gray-400">
        <p>Last updated on December 2, 2022</p>
      </footer>
    </div>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          {item.title}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {item.children.map((child) => (
              <Link key={child.title} href={child.href} className="block text-gray-300 hover:text-white">
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href} className="block text-gray-300 hover:text-white">
      {item.title}
    </Link>
  )
}





// import { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="min-h-screen flex bg-neutral-900 text-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="p-6 flex-1">{children}</main>
//       </div>
//     </div>
//   );
// }

// function Sidebar() {
//   return (
//     <aside className="w-64 bg-neutral-800 p-6">
//       <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
//       <nav>
//         <ul>
//           <li className="mb-4">
//             <a href="#" className="text-neutral-400 hover:text-white">
//               Overview
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-neutral-400 hover:text-white">
//               Prologue
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="text-neutral-400 hover:text-white">
//               Getting Started
//             </a>
//           </li>
//           {/* Add more nav items here */}
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// function Header() {
//   return (
//     <header className="bg-neutral-800 p-6 border-b border-neutral-700">
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-semibold">Agon - Laravel Multipurpose Agency</h1>
//         <div className="space-x-4">
//           <button className="bg-neutral-700 p-2 rounded-full hover:bg-neutral-600">
//             {/* Icons or links */}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
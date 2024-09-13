"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Menu, ChevronDown, Moon, Sun, Laptop } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'

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
  }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">My Project</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-900 bg-primary text-secondary">
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
              className="w-64 bg-primary-default text-white placeholder-gray-400 border-border"
            />
            <Link href="#" className="text-primary-default hover:text-brand-color">About</Link>
            <Link href="#" className="text-primary-default hover:text-brand-color">Contact</Link>

            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {theme === 'light' ? <Sun className="h-5 w-5" /> : theme === 'dark' ? <Moon className="h-5 w-5" /> : <Laptop className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
            <Link href="#what-is-nextra" className="block text-brand-color hover:text-blue-300">What is Nextra?</Link>
            <Link href="#documentation" className="block text-brand-color hover:text-blue-300">Documentation</Link>
          </nav>
        </aside>
      </div>

      <footer className="border-t border-border mt-12 py-6 text-center text-para-color">
        <p>Last updated on October 2, 2024</p>
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
              <Link key={child.title} href={child.href} className="block text-primary-default hover:text-brand-color">
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href} className="block text-primary-default hover:text-brand-color">
      {item.title}
    </Link>
  )
}
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
  { title: 'Installation', href: '#' },
  { 
    title: 'Components', 
    href: '#',
    children: [
      { title: 'Button', href: '#' },
      { title: 'Input', href: '#' },
      { title: 'TextField', href: '#' },
      { title: 'CheckBox', href: '#' },
      { title: 'RadioButton', href: '#' },
      { title: 'Dropdown', href: '#' },
      { title: 'Select', href: '#' },
      { title: 'Modal/Popup', href: '#' },
      { title: 'Tooltip', href: '#' },
      { title: 'Pagination', href: '#' },
      { title: 'Alert/Notification', href: '#' },
      { title: 'Loader/Spinner', href: '#' },
      { title: 'Tab Navigation', href: '#' },
      { title: 'Accordion', href: '#' },
    ]
  },
  { 
    title: 'Product and Catalog', 
    href: '#',
    children: [
      { title: 'ProductCard', href: '#' },
      { title: 'ProductCarousel', href: '#' },
      { title: 'ProductImageGallery', href: '#' },
      { title: 'ProductPrice', href: '#' },
      { title: 'ProductReviews', href: '#' },
      { title: 'ProductFilters', href: '#' },
      { title: 'ProductVariantSelector', href: '#' },
      { title: 'ProductGrid', href: '#' },
      { title: 'ProductList', href: '#' },
      { title: 'CategoryMenu', href: '#' },
      { title: 'ProductBadge', href: '#' },
    ]
  },
  { 
    title: 'Cart and Checkout', 
    href: '#',
    children: [
      { title: 'CartIcon', href: '#' },
      { title: 'CartItem', href: '#' },
      { title: 'CartSummary', href: '#' },
      { title: 'CartPage', href: '#' },
      { title: 'CheckoutForm', href: '#' },
      { title: 'OrderSummary', href: '#' },
      { title: 'PaymentMethods', href: '#' },
    ]
  },
  { 
    title: 'User Account', 
    href: '#',
    children: [
      { title: 'LoginForm', href: '#' },
      { title: 'SignupForm', href: '#' },
      { title: 'UserProfile', href: '#' },
      { title: 'AddressBook', href: '#' },
      { title: 'Wishlist', href: '#' },
      { title: 'OrderHistory', href: '#' },
    ]
  },
  { 
    title: 'Navigation', 
    href: '#',
    children: [
      { title: 'Header', href: '#' },
      { title: 'Footer', href: '#' },
      { title: 'Navbar', href: '#' },
      { title: 'Breadcrumb', href: '#' },
      { title: 'SearchBar', href: '#' },
      { title: 'Sidebar', href: '#' },
      { title: 'MegaMenu', href: '#' },
    ]
  },
  { 
    title: 'Promotional Components', 
    href: '#',
    children: [
      { title: 'Banner', href: '#' },
      { title: 'HeroSection', href: '#' },
      { title: 'DiscountBadge', href: '#' },
      { title: 'NewsletterSubscription', href: '#' },
    ]
  },
  { 
    title: 'Miscellaneous Components', 
    href: '#',
    children: [
      { title: 'RatingStars', href: '#' },
      { title: 'Breadcrumbs', href: '#' },
      { title: 'FAQAccordion', href: '#' },
      { title: 'SocialMediaIcons', href: '#' },
      { title: 'CookieConsent', href: '#' },
      { title: 'SearchResults', href: '#' },
      { title: 'Tag', href: '#' },
      { title: 'ErrorPage', href: '#' },
      { title: 'NoItemsFound', href: '#' },
      { title: 'BackToTopButton', href: '#' },
    ]
  },
  { 
    title: 'Admin and Management', 
    href: '#',
    children: [
      { title: 'DashboardStats', href: '#' },
      { title: 'ProductManagementTable', href: '#' },
      { title: 'OrderManagementTable', href: '#' },
      { title: 'UserManagementTable', href: '#' },
      { title: 'InventoryManagement', href: '#' },
      { title: 'Reports', href: '#' },
    ]
  },
  { 
    title: 'Tips', 
    href: '#',
    children: [
      { title: 'Product Page ', href: '#' },
      { title: 'Product List Page', href: '#' },
      { title: 'User & Account', href: '#' },
      { title: 'Checkout & Cart', href: '#' },
      { title: 'UI & General Components:', href: '#' },
    ]
  },
]

export default function Layout({ 
  children,
  asideList,
}: { 
  children: React.ReactNode ,
  asideList?: any[]
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Wind Mill</h1>
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
        
        {asideList && (
          <>
            <aside className="hidden lg:block w-64 pl-8">
              <h2 className="text-lg font-semibold mb-4">On This Page</h2>
              <nav className="space-y-2">
                {asideList?.map((item) => {
                  return (
                    <div key={item?.href}>
                      <Link href={item?.href} className="block text-brand-color hover:text-blue-300">{item?.text}</Link>
                    </div>
                  )
                })}
              </nav>
            </aside>
          </>
        )}
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
          className="flex items-center justify-between w-full text-left text-[15px] leading-8 font-medium"
        >
          {item.title}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-4">
            {item.children.map((child) => (
              <Link key={child.title} href={child.href} className="block text-gray-500 hover:text-brand-color">
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href} className="block text-primary-default hover:text-brand-color text-[15px] leading-8 font-medium">
      {item.title}
    </Link>
  )
}
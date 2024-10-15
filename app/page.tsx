"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Package, CreditCard, Search, Star, Moon, Sun, Laptop } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'

const featuredComponents = [
  { name: 'ProductCard', icon: Package, description: 'Showcase your products with style' },
  { name: 'ShoppingCart', icon: ShoppingCart, description: 'Streamlined shopping experience' },
  { name: 'Checkout', icon: CreditCard, description: 'Smooth and secure payment process' },
  { name: 'SearchBar', icon: Search, description: 'Powerful product search functionality' },
]

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Commerce UI</h1>
          <nav className="flex items-center space-x-4">
            <a href="/introduction" className="text-foreground/60 hover:text-foreground">Components</a>
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
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        
        <section className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Build Better E-Commerce Experiences</h2>
          <p className="text-xl text-muted-foreground mb-8">A powerful React component library for creating stunning e-commerce websites</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">View on GitHub</Button>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Featured Components</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredComponents.map((component) => (
              <Card key={component.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <component.icon className="w-6 h-6 mr-2" />
                    {component.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{component.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Our Library?</h3>
          <Tabs defaultValue="customizable" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="customizable">Customizable</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
              <TabsTrigger value="accessible">Accessible</TabsTrigger>
            </TabsList>
            <TabsContent value="customizable" className="p-4 bg-card rounded-lg shadow mt-2">
              Easily customize components to match your brands look and feel. Our library provides a wide range of styling options and theming capabilities.
            </TabsContent>
            <TabsContent value="responsive" className="p-4 bg-card rounded-lg shadow mt-2">
              All components are built with responsiveness in mind, ensuring a great user experience across all devices and screen sizes.
            </TabsContent>
            <TabsContent value="accessible" className="p-4 bg-card rounded-lg shadow mt-2">
              We prioritize accessibility, making sure all components meet WCAG guidelines and providing keyboard navigation support out of the box.
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>Stay updated with the latest components and features</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Amazing Library!</CardTitle>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">This component library has significantly sped up our development process. The e-commerce specific components are exactly what we needed.</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">John Doe, Frontend Developer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Highly Recommended</CardTitle>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The attention to detail in these components is impressive. Our e-commerce site looks professional and works flawlessly.</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Jane Smith, UX Designer</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">E-Commerce UI</h4>
              <p>Building better online shopping experiences, one component at a time.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Components</a></li>
                <li><a href="#" className="hover:text-foreground">Examples</a></li>
                <li><a href="#" className="hover:text-foreground">GitHub</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-foreground">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-foreground">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-foreground">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center">
            <p>&copy; 2023 E-Commerce UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
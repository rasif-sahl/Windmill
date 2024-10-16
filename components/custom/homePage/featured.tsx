"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Package, CreditCard, Search } from 'lucide-react'

const featuredComponents = [
    { name: 'ProductCard', icon: Package, description: 'Showcase your products with style' },
    { name: 'ShoppingCart', icon: ShoppingCart, description: 'Streamlined shopping experience' },
    { name: 'Checkout', icon: CreditCard, description: 'Smooth and secure payment process' },
    { name: 'SearchBar', icon: Search, description: 'Powerful product search functionality' },
]

export default function HomeFeatured() {

  return (       
    <section className="mb-16 px-4 lg:px-0">
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
    )
}
    
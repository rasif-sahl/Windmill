"use client";
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function HomeUsers() {

  return (       
        <section className='mb-10 px-4 lg:px-0'>
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
    )
}
    
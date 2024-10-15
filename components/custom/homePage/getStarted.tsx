"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomeGetStarted() {

  return (       
        <section className="mb-16 px-4 lg:px-0">
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
    )
}
    
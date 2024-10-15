"use client";
import React from 'react'
import { Button } from "@/components/ui/button"

export default function HomeBanner() {

  return (       
        <div className="text-center my-16 px-4 lg:px-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Build Better E-Commerce Experiences</h2>
          <p className="text-xl text-muted-foreground mb-8">A powerful React component library for creating stunning e-commerce websites</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">View on GitHub</Button>
          </div>
        </div>
    )
}
    
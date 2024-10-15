"use client";
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeWhyUs() {

  return (       
    <section className="mb-16 px-4 lg:px-0">
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
    )
}
    
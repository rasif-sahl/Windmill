'use client'

import React, { useState } from 'react'
import { Highlight, themes, Language } from 'prism-react-renderer'
import { Check, Copy, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CodePreviewerProps {
  code: string
  component: React.ReactNode
  language?: 'typescript' | 'javascript'
}

function CodeEditor({ code: initialCode, language: initialLanguage = 'typescript' }: { code: string, language?: 'typescript' | 'javascript' }) {
  const [code] = useState(initialCode)
  const [language, setLanguage] = useState<Language>(initialLanguage as Language)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLanguageChange = (newLanguage: 'typescript' | 'javascript') => {
    setLanguage(newLanguage as Language)
  }

  return (
    <div className="w-full rounded-lg overflow-hidden bg-background text-zinc-50">
      <div className="flex justify-between items-center px-4 py-2 bg-background">
        <span className="text-sm text-zinc-400">Example Code</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8 text-zinc-400 hover:text-zinc-700"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-zinc-700">
                {language === 'typescript' ? 'TS' : 'JS'}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('javascript')}>
                JavaScript
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('typescript')}>
                TypeScript
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Highlight
        theme={themes.nightOwl}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, "p-4 overflow-auto")} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="mr-4 text-zinc-600">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default function CodePreviewer({ code, component, language = 'typescript' }: CodePreviewerProps) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 bg-background">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="p-4">
          <div className="border rounded-md p-4 bg-background">
            {component}
          </div>
        </TabsContent>
        <TabsContent value="code" className="p-0">
          <CodeEditor code={code} language={language} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <main>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>


      <Button variant={'default'}>Default button</Button>
      <Button variant={'secondary'}>Secondary button</Button>
      <Button variant={'outline'}>Outline button</Button>
      <Button variant={'ghost'}>Ghost button</Button>
      <Button variant={'link'}>Link button</Button>
      <Button variant={'destructive'}>Destructive button</Button>

    </main>
  )
}

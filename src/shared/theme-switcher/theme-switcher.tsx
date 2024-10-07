"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="outline" size="icon" onClick={()=>theme=='light'?setTheme("dark"):setTheme("light")}>
            {theme!="dark"
                ?
                (<SunIcon style={{width:"3rem", height:"3rem"}}  />)
                :
                (<MoonIcon style={{width:"3rem", height:"3rem"}} />)
            }
        </Button>
    )
}

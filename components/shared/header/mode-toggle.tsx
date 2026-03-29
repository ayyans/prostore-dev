'use client';
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuContent,DropdownMenuSeparator,DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"; 
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
    const [mounted,setMounted] = useState(false);
    const {theme,setTheme} = useTheme();
   //fixing a default error for toggle ui change in browser console
    useEffect(() =>{
   setMounted(true);
    },[]);
    if(!mounted){
        return <div className="w-9 h-9" /> // placeholder instead of null
    }
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === 'system' ? (
                    <SunMoon/>
                ) : theme === 'dark' ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )
                
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                System
            </DropdownMenuCheckboxItem>
             <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                light
            </DropdownMenuCheckboxItem>
             <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
}; 

export default ModeToggle;
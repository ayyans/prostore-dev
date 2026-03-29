
//added use client to check the error fix for the dialogue in nav
"use client";
import { Button } from "@/components/ui/button";
//installed using npm i lucide-react for icons
import {  EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from './mode-toggle';
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
const Menu = () => {
    return (<div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
            <div className="space-x-2">
            <ModeToggle />
<Button asChild variant='ghost'>
            <Link href='/cart'>
            <ShoppingCart />
                Cart
            </Link>
        </Button>
         
        <Button asChild>
            <Link href='/user'>
            <UserIcon />
                Sign in
            </Link>
        </Button>
        </div>
        </nav>
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                 <Button className="align-middle">
                    <EllipsisVertical />
                 </Button>
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start">
                    <SheetTitle>Menu</SheetTitle>
                    <ModeToggle />
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                        <ShoppingCart />
                        Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href='/sign-in'>
                        <UserIcon />
                        Sign in
                        </Link>
                    </Button>
                    <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    </div>);
};
 
export default Menu;
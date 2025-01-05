"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../mode-toogle";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <nav className="bg-slate-100 dark:bg-lighter-black text-black dark:text-white pt-8 px-10">           
            <div className="justify-between items-center md:flex hidden">
                <ul>
                    <li>
                        <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
                    </li>
                </ul>
                <ul className="flex items-center gap-x-4">
                    <li>
                        <Link href="/">Funcionamento</Link>
                    </li>
                    <li>
                        <Link href="/">Preço</Link>
                    </li>
                    <li>
                        <Link href="/"><Button>Login</Button></Link>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </div>
            
            <div className="flex justify-between items-center md:hidden">
                <ul>
                    <li>
                        <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
                    </li>
                </ul>
                <ul className="flex">
                    <li className="pr-2">
                        <ModeToggle />
                    </li>
                    <li>
                        <button
                            className={`inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50`}
                            onClick={toggleNavbar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            
            <div className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-slate-950 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ease-in-out transform ${isClick ? "translate-x-0" : "-translate-x-full"} z-40 md:hidden`}>
                <button
                    className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={toggleNavbar}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                    <li>
                        <Link href="/" className="text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2">Funcionamento</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2">Preço</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

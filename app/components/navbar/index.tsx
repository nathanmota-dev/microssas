import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../mode-toogle";

export default function Navbar() {
    return (
        <nav className="bg-slate-100 dark:bg-lighter-black text-black dark:text-white flex justify-between pt-8 px-10">
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
        </nav>
    )
}
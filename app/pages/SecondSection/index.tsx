import Image from "next/image";

export default function SecondSection() {
    return (
        <div className="pt-10 flex flex-col items-center justify-center pb-10">
            <h1 className="md:text-4xl text-xl font-bold">Como funciona?</h1>
            <div className="flex container justify-center items-center md:gap-x-10">
                <div className="hidden md:block">
                    <Image src="/woman.svg" alt="Woman" width={392} height={392} />
                </div>
                <div className="block md:hidden">
                    <Image src="/woman.svg" alt="Woman" width={140} height={140} />
                </div>
                <div className="px-8 md:px-0">
                    <ul className="space-y-4 md:text-3xl text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex justify-between items-center md:gap-20 gap-5">
                            <span>Acesso a 1 ebook por mês</span>
                            <Image src="/check.png" alt="Check" width={21} height={15} />
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Curadoria especial</span>
                            <Image src="/check.png" alt="Check" width={21} height={15} />
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Cancele quando quiser</span>
                            <Image src="/check.png" alt="Check" width={21} height={15} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
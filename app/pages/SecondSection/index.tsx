import Image from "next/image";

export default function SecondSection() {
    return (
        <div className="pt-10 flex flex-col items-center justify-center pb-10">
            <h1 className="text-4xl font-bold">Como funciona?</h1>
            <div className="flex container justify-center items-center gap-x-10">
                <div>
                    <Image src="/woman.svg" alt="Woman" width={392} height={392} />
                </div>
                <div>
                    <ul className="space-y-4 text-3xl text-slate-600 dark:text-slate-400">
                        <li className="flex justify-between items-center text-center gap-20">
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
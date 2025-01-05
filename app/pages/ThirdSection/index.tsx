import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ThirdSection() {
    return (
        <div className="bg-slate-100 dark:bg-lighter-black text-black dark:text-white flex flex-col justify-center items-center text-center pt-20 pb-20">
            <h1 className="md:text-5xl text-2xl font-bold">Preço Simples e Transparente</h1>
            <h3 className="text-slate-500 dark:text-slate-300 md:text-base text-sm pt-6 md:max-w-[35%] max-w-[88%]">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você?
                Assine o nosso plano mensal <span className="underline">Pro Premium VIP</span> e garanta mensalmente um ebook novo de programação.
                E por menos de um café por dia.
            </h3>
            <div className="pt-14">
                <Card className="p-10 border rounded-3xl">
                    <CardTitle className="text-xl">Plano Pro Premium VIP</CardTitle>
                    <CardDescription className="pt-2">Tudo que você precisa para seus estudos</CardDescription>
                    <div className="pt-8 flex  items-center gap-x-1">
                        <h2 className="text-3xl font-bold">R$29</h2>
                        <h3 className="text-slate-500">/mês</h3>
                    </div>
                    <div className="pt-4">
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            <li className="flex gap-4">
                                <Image src="/check.png" alt="Check" width={21} height={10} />
                                <span>1 ebook por mês</span>
                            </li>
                            <li className="flex gap-4">
                                <Image src="/check.png" alt="Check" width={21} height={15} />
                                <span>1 ebook por mês</span>
                            </li>
                            <li className="flex gap-4">
                                <Image src="/check.png" alt="Check" width={21} height={15} />
                                <span>1 ebook por mês</span>
                            </li>
                            <li className="flex gap-4">
                                <Image src="/check.png" alt="Check" width={21} height={15} />
                                <span>1 ebook por mês</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-10">
                        <Button className="w-full">Assine Agora</Button>
                    </div>

                </Card>
            </div>
        </div>
    )
}

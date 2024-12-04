import { Button } from "@/components/ui/button";


export default function FourthSection() {
    return (
        <div className="p-20 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold">Pronto Para Mudar Sua Vida?</h1>
            <h3 className="text-base font-medium  text-slate-600 dark:text-slate-300 pt-6 max-w-[35%]">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos </h3>
            <div className="pt-8">
                <Button className="w-96">Assine Agora</Button>
            </div>
            <p className="text-xs pt-4 text-slate-400">Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        </div>
    )
}
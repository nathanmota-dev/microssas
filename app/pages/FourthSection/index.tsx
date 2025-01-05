import { Button } from "@/components/ui/button";


export default function FourthSection() {
    return (
        <div className="p-20 flex flex-col justify-center items-center text-center">
            <h1 className="md:text-5xl text-3xl font-bold">Pronto Para Mudar Sua Vida?</h1>
            <h3 className="md:text-base text-lg md:font-medium font- text-slate-600 dark:text-slate-300 pt-6 md:max-w-[35%]">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos </h3>
            <div className="pt-8">
                <Button className="md:w-96 w-80">Assine Agora</Button>
            </div>
            <p className="md:text-xs text-[0.7rem] pt-4 text-slate-400">Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        </div>
    )
}
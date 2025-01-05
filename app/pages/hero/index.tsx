import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
    return (
        <div className="bg-slate-100 dark:bg-lighter-black text-black dark:text-white py-20 flex flex-col items-center justify-center">
            <h1 className="md:text-6xl text-3xl font-bold">Simplifique Seus Estudos</h1>
            <h3 className="text-slate-600 dark:text-slate-400 md:pt-7 pt-4 md:text-lg text-sm flex text-center max-w-[85%] md:max-w-[45%]">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</h3>
            <div className="flex items-center justify-center md:gap-4 gap-2 pt-16">
                <Input className="md:w-72 w-60" placeholder="Coloque seu e-mail" />
                <Button>Assine agora</Button>
            </div>
            <p className="text-slate-600 dark:text-slate-400 md:text-xs text-[0.7rem] md:pt-2 pt-8">Começe sua assinatura agora mesmo. Cancele quando quiser.</p>
        </div>
    )
}
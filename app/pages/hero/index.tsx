import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
    return (
        <div className="bg-slate-100 dark:bg-lighter-black text-black dark:text-white py-20 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Simplifique Seus Estudos</h1>
            <h3 className="text-slate-600 dark:text-slate-400 pt-7 text-lg flex text-center max-w-[45%]">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</h3>
            <div className="flex items-center justify-center gap-4 pt-16">
                <Input className="w-72" placeholder="Coloque seu e-mail" />
                <Button>Assine agora</Button>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs pt-2">Começe sua assinatura agora mesmo. Cancele quando quiser.</p>
        </div>
    )
}
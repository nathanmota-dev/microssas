import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center text-center p-10">
            <Image src="Logo.svg" alt="Logo" width={100} height={100} />
            <p className="text-xs text-slate-500 pt-3">© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </div>
    )
}
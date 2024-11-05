import Image from "next/image";
// Componente funcional Next.js chamado 'CapaHome'
// Exibe uma imagem de fundo, um título e um subtítulo
export default function CapaHome() {
    return (
        <div className="relative h-full w-full drop-shadow-2xl">
            <Image
                src="/images/nome_do_arquivo.extensao"
                layout="fill"
                objectFit="cover"
                alt="Background"
                className="z-0"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="font-black text-[#efe1ce] drop-shadow-2xl break-words text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[90%]">
                    TITULO
                </h1>
                <p className="font-semibold mt-4 text-[#efe1ce] drop-shadow-2xl break-words text-lg md:text-2xl lg:text-3xl xl:text-4xl max-w-[90%]">
                    SUBTITULO
                </p>
            </div>
        </div>
    );
}
/*
Explicação dos pontos principais para iniciantes:
1. Importação de imagem otimizada: Utilizamos o componente 'Image' do Next.js para otimizar o carregamento e o desempenho.
2. Estrutura do componente: 'CapaHome' é um componente reutilizável, que pode ser utilizado para exibir um banner com título e subtítulo de maneira prática.
3. Customização visual: Utilizamos classes do Tailwind CSS para estilizar o componente, garantindo responsividade e um design visualmente atraente.
*/
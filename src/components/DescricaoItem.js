import {Card } from "flowbite-react";
// Componente funcional Next.js chamado 'DescricaoItem'
// Exibe a descrição de um item
// Recebe um parâmetro como propriedade
// Para que o componente funcione, voce deve substituir os parametros de acordo com o que deseja exibir
export default function DescricaoItem({parametro}) {

    return (
        <div className="justify-center items-center flex flex-col p-10 gap-10">
            <Card className="h-[4rem] w-[25vw] max-w-[40rem] border-none bg-[#7E2429] text-2xl font-bold text-[#EFE1CE] drop-shadow-2xl">
                <div className="flex justify-center align-middle items-center xs:text-center md:text-justify">
                    SOBRE
                </div>
            </Card>
            <div  className="bg-[#292929] max-w-[100rem] block p-6 border border-gray-700 rounded-lg">

                <p className="font-semibold text-[#EFE1CE] ">{parametro}</p>
            </div>
        </div>
    )
}
/*
Explicação dos pontos principais para iniciantes:
1. Importação de componentes: Estamos utilizando o componente Card do Flowbite para exibir um título.
2. Componentes reusáveis: O 'DescricaoItem' é um componente que pode ser reutilizado passando parâmetros diferentes, o que ajuda a evitar repetição de código e facilita a manutenção.
3. Customização visual: Utilizamos classes do Tailwind CSS para estilizar o componente, garantindo responsividade e um design visualmente atraente.
*/
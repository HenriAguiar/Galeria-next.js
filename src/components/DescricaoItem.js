import {Card } from "flowbite-react";

export default function DescricaoItem({descricao}) {

    return (
        <div className="justify-center items-center flex flex-col p-10 gap-10">
            <Card className="h-[4rem] w-[25vw] max-w-[40rem] border-none bg-[#7E2429] text-2xl font-bold text-[#EFE1CE] drop-shadow-2xl">
                <div className="flex justify-center align-middle items-center xs:text-center md:text-justify">
                    SOBRE
                </div>
            </Card>
            <div href="#" class="max-w-[100rem] block p-6 bg-black border border-gray-700 rounded-lg">

                <p class="font-normal text-gray-700 dark:text-gray-400">{descricao}</p>
            </div>
        </div>
    )
}
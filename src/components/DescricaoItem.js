import {Card } from "flowbite-react";

export default function DescricaoItem({descricao}) {

    return (
        <div className="justify-center items-center flex flex-col p-10 gap-10">
            <Card className="h-[4rem] w-[25vw] max-w-[40rem] border-none bg-[#7E2429] text-2xl font-bold text-[#EFE1CE] drop-shadow-2xl">
                <div className="flex justify-center align-middle items-center xs:text-center md:text-justify">
                    SOBRE
                </div>
            </Card>
            <div  className="bg-[#292929] max-w-[100rem] block p-6 border border-gray-700 rounded-lg">

                <p className="font-semibold text-[#EFE1CE] ">{descricao}</p>
            </div>
        </div>
    )
}
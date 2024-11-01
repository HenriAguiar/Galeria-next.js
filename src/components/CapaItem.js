import Image from "next/image";
export default function CapaItem() {
    return (
        <div className=" relative h-full w-full drop-shadow-2xl">
            <Image
                src="/images/imagemTeste.png"
                layout="fill"
                objectFit="cover"
                alt="Background"
                className="z-0"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-7xl font-black text-[#efe1ce] drop-shadow-2xl">POKEDEX</h1>
                <p className="font-semibold text-4xl mt-4 text-[#efe1ce] drop-shadow-2xl">Seu portal para monstros japoneses</p>
            </div>
        </div>
    );
}

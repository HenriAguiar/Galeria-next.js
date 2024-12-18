import Image from "next/image";
import { Badge } from "flowbite-react"; // Import Flowbite components
const badgeTheme = {
    root: {
      color: {
        info: "bg-[#362f78] text-[#b4c6fc] font-semibold group-hover:bg-cyan-200",
      },
    },
  };
export default function CapaItem({ titulo, descricao, categoria, imagem }) {
    console.log(titulo)
    return (
        <div className="relative h-full w-full drop-shadow-2xl" >
            <img
                src={imagem}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="bg-gradient-to-r from-[rgba(30,30,30,0.11)] to-[rgba(30,30,30,0.73)]  absolute inset-0 " style={{
                background: 'linear-gradient(270deg, rgba(30, 30, 30, 0.11) 43.5%, rgba(30, 30, 30, 0.73) 95%)'
            }}></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex flex-col items-start gap-8 p-10">
                    <h1 className="text-start truncate-titulo font-black text-[#efe1ce] drop-shadow-2xl break-words text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[100%]">{titulo}</h1>
                    <p className="text-start truncate-descricao font-semibold mt-4 text-[#efe1ce] drop-shadow-2xl break-words text-lg md:text-2xl lg:text-3xl xl:text-4xl max-w-[100%]">{descricao}</p>
                    <Badge
                        className="px-3 rounded-lg"
                        theme={badgeTheme}
                        size="md"
                        color="info"
                    >
                        {categoria}
                    </Badge></div>
            </div>
        </div>
    );
}

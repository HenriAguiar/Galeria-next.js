// Importando o Badge do Flowbite, que é o componente que exibe a categoria
import { Badge } from "flowbite-react";

// Definindo um tema personalizado para o Badge do Flowbite
const badgeTheme = {
  root: {
    color: {
      info: "bg-[#EFE1CE] text-[#292929] font-semibold group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
    },
  },
};
// Componente funcional Next.js chamado 'CapaItem'
// Ele recebe várias propriedades (parametros) para exibir informações dinâmicas

//Para que o componente funcione, voce deve substituir os parametros de acordo com o que deseja exibir
export default function CapaItem({ parametro, parametro, parametro, parametro}) {
  return (
    <div className="relative h-full w-full drop-shadow-2xl">
      <img
        src={parametro}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="bg-gradient-to-r from-[rgba(30,30,30,0.11)] to-[rgba(30,30,30,0.73)]  absolute inset-0 "
        style={{
          background:
            "linear-gradient(270deg, rgba(30, 30, 30, 0.11) 43.5%, rgba(30, 30, 30, 0.73) 95%)",
        }}
      ></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col items-start gap-8 p-10">
          <h1 className="text-start truncate-titulo font-black text-[#efe1ce] drop-shadow-2xl break-words text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[100%]">
            {parametro}
          </h1>
          <p className="text-start truncate-descricao font-semibold mt-4 text-[#efe1ce] drop-shadow-2xl break-words text-lg md:text-2xl lg:text-3xl xl:text-4xl max-w-[100%]">
            {parametro}
          </p>
          <Badge
            className="px-3 rounded-lg"
            theme={badgeTheme}
            size="md"
            color="info"
          >
            {parametro}
          </Badge>
        </div>
      </div>
    </div>
  );
}
/*
Explicação dos pontos principais para iniciantes:
1. Importação de componentes: Estamos utilizando tanto o componente padrão de imagem do Next.js quanto o Badge do Flowbite, o que demonstra a importância de integrar bibliotecas externas no desenvolvimento.
2. Tema do Flowbite: Foi criado um tema personalizado para o Badge, permitindo customizar suas cores e comportamento.
3. Componentes reusáveis: O 'CapaItem' é um componente que pode ser reutilizado passando parâmetros diferentes, o que ajuda a evitar repetição de código e facilita a manutenção.
*/
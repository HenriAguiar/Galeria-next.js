import { Card, Badge } from "flowbite-react"; // Import Flowbite components
import Link from "next/link"; // Import Link from Next.js

// Temas personalizados para o Badge e o Card
const badgeTheme = {
  root: {
    color: {
      info: "bg-[#362f78] text-[#b4c6fc] font-semibold group-hover:bg-cyan-200",
    },
  },
};
const cardTheme = {
  root: {
    children: " flex h-full flex-col justify-center gap-[7px] p-4",
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "w-full h-[200px] rounded-t-lg object-cover",
  },
};

// Componente funcional Next.js chamado 'CardItem' que recebe um item como parâmetro
// Utiliza o componente Card do Flowbite para exibir um item com título, descrição e Badge

//Para que o componente funcione, voce deve substituir os parametros de acordo com o que deseja exibir
export default function CardItem({ item }) {
  
  return (
    <Link href={`rota da pagina`} className="no-underline">
    <Card
      key={item.parametro}
      theme={cardTheme}
      className="w-[20rem] h-[25rem] border-none bg-[#292929] transform transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-800"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={item.parametro}
    >
      <div className="flex flex-col items-start gap-[7px]">
        <h5 className="text-start truncate-titulo text-2xl font-extrabold tracking-tight text-[#EFE1CE]">
          {item.parametro}
        </h5>
        <p className="text-start truncate-descricao font-medium text-[#EFE1CE]">
          {item.parametro}
        </p>
      </div>
      <div className="flex flex-1 self-stretch">
        <div className="flex flex-row gap-2.5 flex-1 mt-auto">
          <Badge
            className="px-3 rounded-lg"
            theme={badgeTheme}
            size="md"
          >
            {item.parametro}
          </Badge>
        </div>
      </div>
    </Card>
    </Link>
  );
}
/*
Explicação dos pontos principais para iniciantes:
1. Importação de componentes: Estamos utilizando tanto o componente padrão de imagem do Next.js quanto o Badge e Card do Flowbite
2. Tema do Flowbite: Foi criado um tema personalizado para o Badge e o Card, permitindo customizar suas cores e comportamento.
3. Componentes reusáveis: Todos os componentes ('CapaItem', 'CapaHome', 'CardItem') são reusáveis e aceitam diferentes parâmetros, o que ajuda a evitar repetição de código e facilita a manutenção.
*/
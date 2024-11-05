import { Card, Badge } from "flowbite-react"; // Import Flowbite components
import Link from "next/link"; // Import Link from Next.js
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

export default function CardItem({ item }) {
  return (
    <Link href={`/item/${item.id}`} className="no-underline">
    <Card
      key={item.id}
      theme={cardTheme}
      className="w-[20rem] h-[25rem] border-none bg-[#292929] transform transition duration-200 ease-in-out hover:scale-105 hover:bg-gray-800"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={item.imagemCard}
    >
      <div className="flex flex-col items-start gap-[7px]">
        <h5 className="text-start truncate-titulo text-2xl font-extrabold tracking-tight text-[#EFE1CE]">
          {item.titulo}
        </h5>
        <p className="text-start truncate-descricao font-medium text-[#EFE1CE]">
          {item.descricao}
        </p>
      </div>
      <div className="flex flex-1 self-stretch">
        <div className="flex flex-row gap-2.5 flex-1 mt-auto">
          <Badge
            className="px-3 rounded-lg"
            theme={badgeTheme}
            size="md"
          >
            {item.categoria}
          </Badge>
        </div>
      </div>
    </Card>
    </Link>
  );
}

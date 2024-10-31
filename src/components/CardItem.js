import { Card, Badge } from "flowbite-react"; // Import Flowbite components

const badgeTheme = {
    root: {
      color: {
        info: "bg-[#EFE1CE] text-[#292929] font-semibold group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
      },
    },
  };
  const cardTheme = {
    root: {
      children: "flex h-full flex-col justify-center gap-[7px] p-4",
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "w-full h-[200px] object-cover",
    },
  };

export default function CardItem({ item }) {
  return (
    <Card
    key={item.id}
    theme={cardTheme}
    className="w-[20rem] h-[25rem] border-none"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={item.imagem}
  >
    <div className="flex flex-col items-start gap-[7px]">
      <h5 className="truncate-title text-2xl font-extrabold tracking-tight text-[#292929] dark:text-white">
        {item.titulo}
      </h5>
      <p className="truncate-title font-medium text-[#292929] dark:text-[#292929]">
        {item.descricao}
      </p>
    </div>
    <div className="flex flex-1 self-stretch">
      <div className="flex flex-row gap-2.5 flex-1 mt-auto">
        <Badge
          className="px-3 rounded-lg"
          theme={badgeTheme}
          size="md"
          color="info"
        >
          {item.categoria}
        </Badge>
      </div>
    </div>
  </Card>
    )}
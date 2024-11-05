import CardItem from "./CardItem";
import { getAllItems } from "@/libs/services/item-service";
import { Card } from "flowbite-react";
export default async function ListaCards() {
    const items = await getAllItems();
  return (
<div className="bg-[#1E1E1E]">
      <div className=" container flex-col mx-auto flex justify-center align-middle items-center gap-10 p-10">
        <Card className="h-[4rem] mx-5 border-none bg-[#7E2429] text-2xl font-bold text-[#EFE1CE] drop-shadow-2xl">
          <div className="p-[80px] flex justify-center align-middle items-center">
            GALERIA
          </div>
        </Card>

        {items.length === 0 ? (
          <p className=" text-2xl font-extrabold tracking-tight text-[#292929]">
            Nenhum item foi encontrado
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {items.map((item) => (
              <CardItem
                key={item.id}
                item={item}
              ></CardItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
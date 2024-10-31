import CardItem from "./CardItem";
import { getAllItems } from "@/libs/services/item-service";

export default async function ListaCards() {
    const items = await getAllItems();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
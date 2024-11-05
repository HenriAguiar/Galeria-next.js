import NavbarGlobal from "@/components/NavBar";
import CapaItem from "@/components/CapaItem";
import { getItemById } from "@/libs/services/item-service";
import DescricaoItem from "@/components/DescricaoItem";

export default async function Item({params}) {
  console.log(params.slug)
  const item = await getItemById(params.slug)
  console.log("Item retornado na pagina de descrição do item:", item)
  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden drop-shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavbarGlobal />
        </div>
        <CapaItem parametro={item.parametro} parametro={item.parametro} parametro={item.parametro} parametro={item.parametro}/>
      </div>
      <DescricaoItem parametro={item.parametro}/>

    </>
  );
}

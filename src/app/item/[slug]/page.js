import NavbarGlobal from "@/components/NavBar";
import CapaItem from "@/components/CapaItem";
import { getItemById } from "@/libs/services/item-service";
import DescricaoItem from "@/components/DescricaoItem";

export default async function Item({params}) {
  console.log(params.slug)
  const item = await getItemById(params.slug)
  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden drop-shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavbarGlobal />
        </div>
        <CapaItem titulo={item.titulo} descricao={item.descricao} categoria={item.categoria} imagem={item.imagemCapa}/>
      </div>
      <div className="bg-[#1E1E1E]">
        <DescricaoItem descricao={item.descricao}/> 
      </div>

    </>
  );
}

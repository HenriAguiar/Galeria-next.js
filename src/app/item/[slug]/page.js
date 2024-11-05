import NavbarGlobal from "@/components/NavBar";
import CapaItem from "@/components/CapaItem";
import DescricaoItem from "@/components/DescricaoItem";
import items from "@/items";

export default async function Item({params}) {
  const item = items.find((item) => item.id === parseInt(params.slug));
  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden drop-shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavbarGlobal />
        </div>
        <CapaItem titulo={item.parametro} descricao={item.parametro} categoria={item.parametro} imagem={item.parametro}/>
      </div>
      <div className="bg-[#1E1E1E]">
        <DescricaoItem descricao={item.descricao}/> 
      </div>

    </>
  );
}

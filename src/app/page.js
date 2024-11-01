import CapaHome from "@/components/CapaHome";
import ListaCards from "@/components/ListaCards";
import NavbarGlobal from "@/components/NavBar";

export default async function Home() {
  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden drop-shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavbarGlobal />
        </div>
        <CapaHome />
      </div>
      <ListaCards />
    </>
  );
}

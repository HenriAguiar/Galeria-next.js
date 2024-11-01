import NavbarGlobal from "@/components/NavBar";
import CapaItem from "@/components/CapaItem";
export default function Item() {
  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden drop-shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-30">
          <NavbarGlobal />
        </div>
        <CapaItem />
      </div>
    </>
  );
}

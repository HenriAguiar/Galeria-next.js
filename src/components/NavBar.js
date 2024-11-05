
import { Navbar } from "flowbite-react";

export default function NavbarGlobal() {

  return (
    <Navbar
      fluid
      rounded
      className="h-[3.5rem] mx-auto drop-shadow-2xl bg-none px-2 py-2.5 sm:px-4"
    >
      <Navbar.Brand  href="sua rota">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Galeria
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}

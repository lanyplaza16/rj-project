import "../../styles/componentes/Menu/Menu.scss";
import { Link } from "react-router-dom";

export const Menu = () => {

  return (
    
    <nav className={"lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute top-14 right-0 bg-white p-0 border-2"}>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/">
            HOME
        </Link>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/productos/3a5">
            3 A 5 AÑOS
        </Link>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/productos/6a8">
            6 A 8 AÑOS
        </Link>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/productos/9a12">
            9 A 12 AÑOS
        </Link>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/productos/mas12">
            + 12 AÑOS
        </Link>
        <Link className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4" to="/contacto">
            CONTACTO
        </Link>
    </nav>
  );
};
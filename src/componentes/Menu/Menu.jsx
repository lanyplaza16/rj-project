import "../../styles/componentes/Menu/Menu.scss";

export const Menu = () => {

  return (
    
    <nav className={"lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute top-14 right-0 bg-white p-0 border-2"}>
        <a href="#" className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4">
            HOME
        </a>
        <a href="#" className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4">
            3 A 5 AÑOS
        </a>
        <a href="#" className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4">
            6 A 8 AÑOS
        </a>
        <a href="#" className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4">
            9 A 12 AÑOS
        </a>
        <a href="#" className="block lg:inline-block text-pink-500 hover:text-gray-900 lg:hover:text-gray-900 lg:ml-4">
            + 12 AÑOS
        </a>
        </nav>
  );
};
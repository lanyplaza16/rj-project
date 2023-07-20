//import React from 'react';
//import { Navbar, Nav, Container } from 'react-bootstrap';
//import "../../styles/componentes/Header/Header.scss";
//import logoRepintar from "../../assets/logoRepintar.png";

{/*export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">REPINTAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">INICIO</Nav.Link>
            <Nav.Link href="#">DE 3 A 5 AÑOS</Nav.Link>
            <Nav.Link href="#">DE 6 A 8 AÑOS</Nav.Link>
            <Nav.Link href="#">DE 9 A 12 AÑOS</Nav.Link>
            <Nav.Link href="#">+ DE 12 AÑOS</Nav.Link>
            <Nav.Link href="#">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
*/}

import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">REPINTAR</div>
        <button
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
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
      </div>
    </header>
  );
};
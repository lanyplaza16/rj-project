import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";


export const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="bg-gray-100 p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
                <hr className="my-4" />
                <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tu compra</h2>
          <hr className="my-4" />
            {
            cart.map((item) => (
                <div key={item.id} className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{item.nombre}</h3>
                    <img src={item.img} alt={item.nombre} className="w-32 h-32 object-cover mb-2" />
                    <p className="mb-1">Precio: ${item.precio * item.cantidad}</p>
                    <p className="mb-2">Cantidad: {item.cantidad}</p>
                    <button
                        onClick={() => removerDelCarrito(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
                    >
                        <FaTrashAlt className="inline-block mr-1" />
                        Eliminar
                    </button>
                    <hr className="my-2" />
                </div>
            ))
            }
            <div>
                <h4 className="text-2xl font-semibold mb-4">Total: ${totalCompra()}</h4>
                <button
                    onClick={vaciarCarrito}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 focus:outline-none"
                >
                    Vaciar carrito
                </button>
                <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"> Terminar mi compra </Link>
          </div>
        </div>
    );
}
import { Link } from "react-router-dom";

export const ItemCard = ({item}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <img src={item.img} alt={item.nombre} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{item.nombre}</h3>
      <p className="text-gray-700 mb-4">${item.precio}</p>
      <Link className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" to={`/detail/${item.id}`}>Detalles</Link>
   </div>
  );
};
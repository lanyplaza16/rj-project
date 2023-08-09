export const ItemDetail = ({item}) => {

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <img src={item.img} alt={item.nombre} className="w-full h-64 object-cover rounded-md mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">{item.nombre}</h2>
            <p className="text-gray-700 mb-4">{item.descripcion}</p>
            <p className="text-xl font-semibold text-gray-900">${item.precio}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Agregar al carrito</button>
        </div>
    )
};
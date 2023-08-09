import "../../styles/componentes/ItemListContainer/ItemListContainer.scss";
import { ItemList } from "../ItemList/ItemList";
import { useProductos  } from "../../hooks/useProductos";


export const ItemListContainer = () => {
    const { productos, loading } = useProductos()
    console.log(loading,productos)

    return (
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
            {
                loading
                    ? <h2 className="text-2xl font-semibold mb-4">Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}
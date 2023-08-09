import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2 className="text-2xl font-semibold mb-4">Productos</h2>
            <div className="row">
                {
                    productos.map((prod) => (
                    <ItemCard key= {prod.id} item={prod}/>
                    ))
                }
            </div>
        </div>
    )
}
       
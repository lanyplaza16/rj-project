import "../../styles/componentes/ItemListContainer/ItemListContainer.scss"

export const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo__contenedor">
            <h2>Item List Container</h2>
            <hr />
            <p>Hola mundo</p>
            <p>{saludo}</p>
        </div>
    )
}
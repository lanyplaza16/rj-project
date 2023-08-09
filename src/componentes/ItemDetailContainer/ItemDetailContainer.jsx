import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(itemId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                setItem( r.find(prod => prod.id === Number(itemId) ))
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
            {
                loading
                    ? <h2 className="text-2xl font-semibold mb-4">Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}
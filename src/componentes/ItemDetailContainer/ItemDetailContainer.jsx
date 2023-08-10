import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true)

         //1- armar la ref
         const itemRef = doc(db, "productos", itemId)
         //2- llamar la ref
         getDoc(itemRef)
             .then((doc) => {
                 // doc === ok
                 setItem({
                     id: doc.id,
                     ...doc.data()
                 })
             })
             .catch(e => console.log(e))
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
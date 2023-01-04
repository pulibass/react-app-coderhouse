import ItemList from "../ItemList/ItemList";
import "./itemListContainer.scss";
import getItems from "../../asyncmock";
import { useEffect, useState } from "react";


export default function ItemListContainer(props) {
    const [products, setProducts] = useState([])

    useEffect( () =>{
    getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta)
    })
})
    return (
        <div className="containerList">
            {products.map(productos => <ItemList
                key={productos.id}
                {...productos}
            />)}
        </div>
    )
}


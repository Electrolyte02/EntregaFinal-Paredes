import { ItemCount } from "./ItemCount";
import { useCartContext } from "../context/cartContext";

function ItemDetail({producto}){
    const { agregarAlCart } = useCartContext();
    const onAdd = (cantidad) => {
        agregarAlCart( { ...producto, quantity: cantidad} )
    }

    return (
        <div className='detailContainer'>
            <img src={producto.imagen} className='detailImg'/>
            <div className="detailTextContainer">
                <h2 className="detailTitle">{producto.nombre}</h2>
                <p className="detailText">{producto.descripcion}</p>
                <p className="detailPrice">{producto.precio}</p>
                <div className="detailButtonContainer">
                    <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

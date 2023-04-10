import { Button } from "react-bootstrap";

function ItemDetail(props){
    return (
    <div className='detailContainer'>
    <img src={props.image} className='detailImg'/>
    <div className="detailTextContainer">
        <h2 className="detailTitle">{props.title}</h2>
        <p className="detailText">{props.description}</p>
        <div className="detailButtonContainer">
            <Button className="detailButton">Comprar</Button>
            <Button className="detailButton">Agregar al Carrito</Button>
        </div>
    </div>
  </div>
    )
}

export default ItemDetail
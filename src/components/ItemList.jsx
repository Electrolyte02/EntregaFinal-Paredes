import Item from './Item'

function ItemList({productos}){
    return(
    <div className='cardContainer'>
    {productos && productos.map((producto) => (
      <Item title={producto.title} image={producto.image} id={producto.id}></Item>
    ))}
    </div>
    )
}

export default ItemList
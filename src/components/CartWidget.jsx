function CartWidget(props){
  const contCarrito = props.contCarrito;
    return(
      <div>
      <img width={50} height={50}  src='./src/assets/cart-shopping-solid.svg'></img>
      <p>{contCarrito}</p>
      </div>
    )
  }
  export default CartWidget

export default function CartItem(props){
    const cart  = props.cart;
    // console.log(cart)

    return(
        <>
          <div className="jumbo mt-5 my-5 text-center"  key={cart.id}  >

            <h6>Product Name: {cart.product_variant.product.name} Price: {cart.product_variant.discount_price} <br></br> Total Cart Item: {cart.quantity}  </h6>

                
          </div>
        </>
    )
}
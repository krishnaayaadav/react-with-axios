
import axios from 'axios';
import { useState, useEffect } from 'react';

import CartItem from './CartItems';
import AddNewCartItem from '../Post/AddNewCartItem';

export default function GetAllUserCarts(){

    const [cartData, setCartItems ] = useState([]);

    const baseURL = 'https://api.kreomart.com';
    let targetURL = baseURL + '/api/users/carts/all/items/';

    let authTokens = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUxMDAwMTk4LCJpYXQiOjE3MDc4MDAxOTgsImp0aSI6ImI3YTNjZmVkN2VjZDRmZWQ4MzkxZWQwMzgyODUyODZhIiwidXNlcl9pZCI6MX0.bM9hziuYUfm-FL1wVyol4myuVVRm6-9d8dTznY1Y8zU';

    const myheaders = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authTokens}`
    }

    useEffect( ()=> {

        // making get request using authtokens here
        axios.get(targetURL, { headers: {...myheaders}})
          // success response handle
          .then( (response) => {
             if(response.status == 200){
                // console.log(response.data)
                
                // setting response data 
                setCartItems(response.data.results.cart_data)

             }
          } )
          // errors
          .catch( (errors) => {
              console.log(errors.status, errors.response)
          } )

          // finally block
          .finally( ()=> {
             console.log('\n Cart response is received')
          } )
        
    }, [cartData.length] )

    return(
        <>
        <div className="jumbo mt-5 my-5 text-center">

          <h3> Sample Page for Cart Items  using authTokens</h3>

            { cartData.map( cart => (
                 <CartItem  cart = {cart}  />
            ) ) }

            <AddNewCartItem />
          
        </div>
      </>
    )
}
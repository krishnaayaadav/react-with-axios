import axios from "axios";
import { useState, useEffect } from "react";


export default function AddNewCartItem(){
    const  [isInserted, setInserted] = useState(false);

    useEffect( () => {

        const targetURL = 'https://api.kreomart.com/api/users/carts/add/new/items/';
        let authTokens  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUxMDAwMTk4LCJpYXQiOjE3MDc4MDAxOTgsImp0aSI6ImI3YTNjZmVkN2VjZDRmZWQ4MzkxZWQwMzgyODUyODZhIiwidXNlcl9pZCI6MX0.bM9hziuYUfm-FL1wVyol4myuVVRm6-9d8dTznY1Y8zU';

        const request_data = {
            product_variant: 1,
            quantity: 2

        };

        const req_headers  = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens}`
        };


        // making post request using auth tokens to secured api
        axios.post(targetURL, request_data, {headers: req_headers})
          // success response 
          .then( response => {
              if(response.status == 201){
                 console.log('\nCart items successfully added in cart')
                 setInserted(true);
              }
          } )

          // handler errors
          .catch( error => {
              console.log(error.status,error.response)
          } )
    } )
    return(
        <>
           {isInserted ? <h5>Congrats Cart Item Added Succcessfully</h5> : ''}
        
        </>
    )
}
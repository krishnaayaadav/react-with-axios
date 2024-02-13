import axios from "axios";
import { useState, useEffect } from "react";

// Aim: post request without using auth tokens

export default  function AddNewExpense(){

    const [isInserted, setInserted] = useState(false);

    useEffect( ()=> {

        // making post request post new data
        const targetURL = 'http://127.0.0.1:8000/expense/api/expense/add/';
        const req_data  = {
           
            exp_user: 'bhole',
            exp_date: '2024-02-10',
            exp_amount: 100,
            exp_title: 'Some title here',
            exp_description: 'Testing is a critical part of the API '

        };
        const something = {'Content-Type': 'application/json'};
        
        axios.post(targetURL,{...req_data},{params: {}, headers: {...something}, } )
         .then(response => {
            if(response.status == 201){
                console.log(response.data)
                setInserted(true)
            }
         })

         .catch( errors => { 
            console.log(errors)
         } )


    }, [isInserted] )
    return(
        <> 
           <h5>Is Exense Inserted: {isInserted} </h5>
        </>
    )
}

import axios from 'axios';
import  { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItems';

import AddNewExpense from '../Post/AddNewExpense';

export default function GetAllExpense(){
    const baseURL = 'http://127.0.0.1:8000';
    const [expensesData, setExpenseData]  = useState([]);

    // get request without using authTokens or headers
    useEffect( ()=> {
      let targetURL = baseURL + '/expense/api/expense/';

      // making request ot server 
      axios.get(targetURL ,{headers: {'Content-Type': 'application/json'}})
        // success response
        .then( response => {
           if(response.status == 200){
            // console.log('\n Getting valid response from server\n', response.data.results)
            setExpenseData(response.data.results)
           }
        } )
        // errors 
        .catch( errors => {
            console.log('\n Getting errors \n', errors.status, errors.response)

        }  )

        // finally block
        .finally( ()=> {
            console.log('\n Response is  received ')
        } )
    }, [expensesData.length])

    // console.log(expensesData)


    return(
        <>
          <div className="jumbo mt-5 my-5 text-center">

            <h3> Sample Page for Expesen data without using authTokens</h3>
            { expensesData.map( expenseItem => (
                <ExpenseItem expense = {expenseItem}  />
            ) )}

            <AddNewExpense />
          </div>
        </>
    )
}
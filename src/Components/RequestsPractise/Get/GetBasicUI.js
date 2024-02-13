import  { Routes, Route } from 'react-router-dom';

import GetAllExpense from './GetExpenses';
import GetAllUserCarts from './GetAllUserCarts';

export default function GetBasicUI(){

    return(
        <>
            <Routes>
                <Route path='/get/all/expense/' element = { <GetAllExpense /> }   />
                <Route path='/get/user/carts/'  element = {  <GetAllUserCarts />  }  />
            </Routes>
        </>
    )
}
import axios from "axios"


export default function Table(){
    const baseURL = 'http://127.0.0.1:8000';
    
    // axios instance 
    let axiosIstance =axios.create({
        baseURL: 'http://127.0.0.1:8000',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // making get request
    axios.get(baseURL+'/expense/api/expense/').then( function (response) {
        // handler success response
        console.log('Valid response received')
        console.log(response, response.status)
    })

    // catching errors
    .catch(function (errors){
        console.log(errors)
    })

    // finalyy block it always execute
    .finally( function(){

        console.log('request cycle compplted')
    } )


    // get request using parameters
    axiosIstance.get('/expense/api/expense/')
    .then( response => {
        console.log('\n Request using Axios instance')
        console.log(response.status, response.data)
    } )
    .catch( errors => {
        console.log(errors)
    } )

    .finally( () => {
        console.log('\n Request using Axios Instance')
    })


    // get request using parameters searching request
    axiosIstance.get('/expense/api/expense/search/krishna/')
    .then(response => {
        console.log(`\nSearch response here\n ${response.status}`, response.data)
    })
    // catch erros
    .catch( (errors) => {
        console.log(errors)
    } ) 
    .finally( ()=> {
        console.log('Search request completed')
    } )

    axiosIstance.delete('/expense/api/expense/delete/', {
        // using parameters here
        params: {
            expId: 23
        }
    })
      .then( response => {
        console.log(`Delete response ${response.status}`)
      } )
      .catch( errors => {
        console.log(`Delete errors ${errors.status} `,  )

      }  )



    // post request 
    axios.post(baseURL+'/expense/api/expense/add/ ', {

    }).then( (response) => {
        console.log(response.status, response.data)
    } )

    // catching execptions/errors
    .catch( (errors) => {
        console.log('\n Getting errors\n')
        console.log(errors.response.data)
    } )

   
    
    

    
    return(
        <></>
    )
}
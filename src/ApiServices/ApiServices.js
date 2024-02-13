import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000';
function getAllData(){

    axios.get('/expense/api/expense/')
}
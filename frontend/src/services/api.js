import axios from 'axios';

export default axios.create({
    baseURL: 'https://drivops-carros-js.herokuapp.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})
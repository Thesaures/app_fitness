import axios from 'axios';
// require('dotenv').config()
// console.log('this is env',process.env)
var apiClient = axios.create();
// apiClient.defaults.baseURL = `http://${process.env.IP_ADDRESS}:${process.env.BACKEND_PORT}`;
apiClient.defaults.baseURL = `http://172.16.34.182:8080`;
console.log('ip address : ',process.env.IP_ADDRESS)
console.log('this is url',apiClient.defaults.baseURL);
apiClient.defaults.headers.common['Content-Type'] = 'application/json';
export default apiClient;

const { default: axios } = require("axios");

//created axio client to create endpoint
const axioClient=axios.create({
    baseURL:'http://localhost:8000'
});



export default{

}
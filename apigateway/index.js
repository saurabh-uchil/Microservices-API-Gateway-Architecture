const { default: axios } = require('axios');
const express =  require('express');

const app = express();
const PORT =  3000;

const productsURL = "http://localhost:3001/";
const usersURL = "http://localhost:3002/";
const servicesURL = "http://localhost:3003/";

//get products
app.get('/products', async (req, res)=>{
    const response = await axios.get(productsURL);
    res.json(response.data);
});

// get users
app.get('/users',async (req, res)=>{
    const response = await axios.get(usersURL);
    res.json(response.data);
});

// get services
app.get('/services',async (req, res)=>{
    const response = await axios.get(servicesURL);
    res.json(response.data);
});

app.listen(PORT, ()=>{
    console.log("Listening on port: "+PORT);
}); 
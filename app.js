


const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const prd_repo = require('./prd-repo')


const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.get('/products',async(req,res) => { 
    try{
        const products = await prd_repo.getAllProducts();
        res.status(200).json({ products });
    }
    catch(e) {
        res.status(404).send({
            status:"fail",
            message: e.message
        })
    }
})

app.get('/products/:id',async(req,res) => {
    try{
        id = req.params.id
        const product = await prd_repo.getProductById(id);
        res.status(200).json({ product })
    }
    catch(e) {
        res.status(400).send({
            status:"fail",
            message:e.message
        })
    }
})

app.post('/products/',async(req,res) => {
    try{
        product = req.body
        const result = await prd_repo.addProduct(product);
        res.status(202).json({
            res:'sucsess',
            url:'localhost/8080/products/' + product.id,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status:"fail",
            message:e.message
        })
    }
})



app.delete('/products/:id',async(req,res) => {
    try{
        id = req.params.id
        const result = await prd_repo.deleteProduct(id);
        res.status(201).json({
            res:'sucsess',
            url:'localhost/8080/products/' + id,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status:"fail",
            message:e.message
        })
    }
})

app.put('/products/:id',async(req,res) => {
    try{
        id = req.params.id
        product = req.body
        const result = await prd_repo.updateProduct(id, product);
        res.status(201).json({
            res:'sucsess',
            url:'localhost/8080/products/' + pro.id,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status:"fail",
            message:e.message
        })
    }
})



app.listen(8080, console.log('port 8080'));
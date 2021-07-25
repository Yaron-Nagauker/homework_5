
const connectedKnex = require('./knex-conector.js')

const getAllProducts = () => {
    return connectedKnex('PRODUCTS').select('*')
}

const getProductById = (id) => {
    return connectedKnex('PRODUCTS').select('*').where('id', id)
}

const addProduct = (product) => {
    return connectedKnex("PRODUCTS").insert(product)
}

const updateProduct = (product, id) => {
    return connectedKnex("PRODUCTS").where('id', id).update(product)
}

const deleteProduct = (id) => {
    return connectedKnex("PRODUCTS").where('id', id).del()
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}
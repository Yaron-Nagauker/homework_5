
const knex = require('knex')


const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "products.db"
    },
    useNullAsDefault: true
})

module.exports = connectedKnex;
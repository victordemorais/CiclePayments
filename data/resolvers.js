
const {
    Mes,
    Credito,
    Debito
} = require('../models');
require('dotenv').config();

const resolvers = {
  
    Query: {
        // Fetch all users

        async todosDebitos() {
            return await Debito.all();
        },

        // Get a user by it ID
        async umDebito(_, {
            id
        }) {
            return await Debito.findById(id);
        },
    },
    Mutation: {

        async criarCredito(_, {
            mes_id,
            ano,
            nome,
            valor
        }) {
            const credito = await Credito.create({
                mes_id,
                ano,
                nome,
                valor
            });

            // Assign tags to post
            return credito;
        }

    }
}
module.exports = resolvers;
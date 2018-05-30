const {
    Mes,
    Credito,
    Debito
} = require('../../models');
require('dotenv').config();

const CreditoResolver = {
    Query: {

        async todosCreditos() {
            return await Credito.all();
        },

        async umCredito(_, {
            id
        }) {
            return await Credito.findById(id);
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
module.exports = CreditoResolver;
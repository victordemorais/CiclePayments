const {
    Mes,
    Credito,
    Debito
} = require('../../models');
require('dotenv').config();

const DebitoResolvers = {

    Query: {
        async todosDebitos() {
            return await Debito.all();
        },
        async umDebito(_, {
            id
        }) {
            return await Debito.findById(id);
        },
    },
    Mutation: {

        async criarDebito(_, {
            mes_id,
            ano,
            nome,
            valor,
            status
        }) {
            const debito = await Debito.create({
                mes_id,
                ano,
                nome,
                valor,
                status
            });

            // Assign tags to post
            return debito;
        }

    }
}
module.exports = DebitoResolvers;
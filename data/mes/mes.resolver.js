const {
    Mes,
    Credito,
    Debito
} = require('../../models');
require('dotenv').config();

const MesResolver = {
    Mes: {
        async credito(req) {
            console.log(req.mes)
            return await Credito.findAll({
                where: {
                    mes: req.mes
                }
            });
        },
    },
    Query: {

        async todosMes() {
            return await Mes.all();
        },

        async umMes(_, {
            id
        }) {
            return await Mes.findById(id);
        },

    },
    Mutation: {
        async criarMes(_, {
            nome_mes,
            mes,
            ano
        }) {
            const mesano = await Mes.create({
                nome_mes,
                mes,
                ano
            });
            return mesano;
        },


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
module.exports = MesResolver;
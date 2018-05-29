const {
    GraphQLScalarType
} = require('graphql');
const {
    Kind
} = require('graphql/language');
const {
    Mes,
    Credito,
    Debito
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const slugify = require('slugify');
require('dotenv').config();

const resolvers = {
    Mes: {
        async credito({
            id
        }) {

            return await Credito.findAll(
                { where: { mes_id: id} }
            );
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
        // Fetch all users
        async todosCreditos() {
            return await Credito.all();
        },

        // Get a user by it ID
        async umCredito(_, {
            id
        }) {
            return await Credito.findById(id);
        },
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

            // Assign tags to post
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
module.exports = resolvers;
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
    Mes:{
        async credito({id}) {
            
            return await Credito.findById(id);
        },
    },
    Query: {
        // Fetch all users
        async todosMes() {
            return await Mes.all();
        },

        // Get a user by it ID
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
            mes,
            ano
        }) {
            const mesano = await Mes.create({
                mes,
                ano
            });
            
            // Assign tags to post
            return mesano;
        },


        async criarCredito(_, {
            mes,
            ano,
            nome,
            valor
        }) {
            const credito = await Credito.create({
                mes,
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
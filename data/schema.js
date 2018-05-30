const {
    makeExecutableSchema
} = require('graphql-tools');
const {
    merge
} = require('lodash');

const resolvers = require('./resolvers');
const MesResolvers = require('./mes/mes.resolver');
const CreditoResolvers = require('./credito/credito.resolver');
const DebitoResolvers = require('./debito/debito.resolver');

const {
    creditoDefs,
    creditoMutations,
    creditoQueries
} = require('./credito/credito.schema');
const {
    debitoDefs,
    debitoMutations,
    debitoQueries
} = require('./debito/debito.schema');
const {
    mesDefs,
    mesMutations,
    mesQueries
} = require('./mes/mes.schema');
const typeDefs = `
    scalar DateTime
    ${creditoDefs}
    ${debitoDefs}
    ${mesDefs}
    type Query {
    ${creditoQueries}
    ${debitoQueries}
    ${mesQueries}
    }
    type Mutation {
    ${creditoMutations}
    ${debitoMutations}
    ${mesMutations}
    }
`;
module.exports = makeExecutableSchema({
    typeDefs,
    resolvers: merge(
        MesResolvers,
        CreditoResolvers,
        DebitoResolvers
    )
});
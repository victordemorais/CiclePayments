const {
    makeExecutableSchema
} = require('graphql-tools');
const resolvers = require('./resolvers');

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
    resolvers
});
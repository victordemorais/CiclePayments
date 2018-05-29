const debitoDefs = `
type Debito {
    id: ID
    mes: Int!
    ano: Int!
    nome: String!
    valor: Float!
    status: String!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
}
`;

const debitoQueries = `
    todosDebitos: [Debito]
    umDebito(id: Int!): Debito
`;
const debitoMutations = `
    criarDebito (
        mes: Int!
        ano: Int!
        nome: String!
        valor: Float!
        status: String!
    ): Debito
    atualizaDebito(
        id: ID!
        mes: Int!
        ano: Int!
        nome: String!
        valor: Float!
        status: String!
    ): Debito
`;
module.exports = {
    debitoDefs,
    debitoQueries,
    debitoMutations
}
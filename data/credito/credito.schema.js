const creditoDefs = `
type Credito {
    id: ID
    mes: Int!
    ano: Int!
    nome: String!
    valor: Float!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
}
`;

const creditoQueries = `
    todosCreditos: [Credito]
    umCredito(id: Int!): Credito
`;
const creditoMutations = `
    criarCredito (
        mes: Int!
        ano: Int!
        nome: String!
        valor: Float!
    ): Credito
    atualizaCredito(
        id: Int!
        mes: Int!
        ano: Int!
        nome: String!
        valor: Float!
    ): Credito
`;
module.exports = {
    creditoDefs,
    creditoQueries,
    creditoMutations
}
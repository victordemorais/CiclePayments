const creditoDefs = `
type Credito {
    id: ID
    mes: String!
    ano: String!
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
        mes:String!
        ano:String!
        nome:String!
        valor:Float!
    ): Credito
    atualizaCredito(
        id: Int!
        mes:String!
        nome:String!
        valor:Float!
    ): Credito
`;
module.exports = {
    creditoDefs,
    creditoQueries,
    creditoMutations
}
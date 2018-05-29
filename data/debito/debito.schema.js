const debitoDefs = `
type Debito {
    id: ID
    mes: String!
    nome: String!
    valor: Float!
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
        mes:String!
        nome:String!
        valor:Float!
    ): Debito
    atualizaDebito(
        id: Int!
        mes:String!
        nome:String!
        valor:Float!
    ): Debito
`;
module.exports = {
    debitoDefs,
    debitoQueries,
    debitoMutations
}
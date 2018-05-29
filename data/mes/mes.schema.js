const mesDefs = `
type Mes {
    id: ID
    mes: String!
    ano: String!
    debito: [Debito!]
    credito: [Credito!]
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
}
`;
const mesQueries = `
    todosMes: [Mes]
    umMes(id:Int!):Mes
`;
const mesMutations = `
    criarMes(
        mes:String!
        ano:String!
    ):Mes
`;


module.exports = {
    mesDefs,
    mesQueries,
    mesMutations
}
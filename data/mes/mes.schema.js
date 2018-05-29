const mesDefs = `
type Mes {
    id: ID
    nome_mes:String!
    mes: Int!
    ano: Int!
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
        nome_mes:String!
        mes:Int!
        ano:Int!
    ):Mes
`;


module.exports = {
    mesDefs,
    mesQueries,
    mesMutations
}
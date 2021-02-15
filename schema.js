const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

//  HardCoded Data
const customers = [
    {id: '1', name: 'John Doe', email:"johndoe@gmail.com", age:34},
    {id: '2', name: 'Steve Smith', email:"SteveSmith@gmail.com", age:25},
    {id: '3', name: 'Sara Wiliam', email:"sarawilliam@gmail.com", age:32},
]
//  Custom Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})
//  Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for(let i = 0; i<customers.length; i++)
                {
                    if (customers[i].id == args.id){
                         return customers[i];
                    }
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
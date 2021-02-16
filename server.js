const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}))

app.get("/", function (req, res) {
    return res.send("Hello World");
});


app.listen(4000, ()=>console.log("Server is listening on port 4000"));

module.exports = app;
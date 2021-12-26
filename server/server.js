//npm install apollo-server-express express graphql mongoose 
//npm -D nodemon

const express=require('express');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs=require('./typeDefs');// Создаем и описываем типы 
const resolvers=require('./resolvers');//Обьект с функциями 
const mongoose=require('mongoose');



async function startServer(){
    const app=express();
    const apolloServer=new ApolloServer({typeDefs,resolvers});
    await apolloServer.start();
    apolloServer.applyMiddleware({app:app,path:'/items'});
    
    app.use((req,res)=>{
        res.send("Hellow from Apollo server");
    });

    await mongoose.connect('mongodb+srv://SLIVER:1966@cluster0.zkfy4.mongodb.net/Progect?retryWrites=true&w=majority',
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
    )

    app.listen(4000,()=>console.log('Server is running on http://localhost:4000/ and GraphQL on http://localhost:4000/items '));

}

startServer();
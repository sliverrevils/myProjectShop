const {gql} =require('apollo-server-express');

 
const typeDefs=gql`
type Item{
    id:ID
    name:String    
    number:Float  
    discount:Float  
    picture:String
    price:String 
    description:String
    
}

input ItemInput{
    name:String    
    number:Float 
    discount:Float 
    picture:String
    price:Float 
    description:String
   
}


type Query{
    # hello:String   
    allItems:[Item] 
    findByName(name:String):Item    
    findById(id:ID):Item
}

#   название функции  (принимаемый параметр : его тип) : возвращаемый тип 

# mutation{       -  ПРИМЕР ЗАПРОСА 
#   addItem (item:{
#     name:"PC" 
#     description:"BEST PC EVER "
#     }){
#       id
#       name
#       description
#     }
# }
type Mutation{
    addItem(item:ItemInput):Item
    delItem(id:ID):String
    updateItem(id:ID,item:ItemInput):Item
}
`;

module.exports=typeDefs;
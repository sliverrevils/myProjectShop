const Item=require('./items/Item.model');
//                          ФУНКЦИИ ЗАПРОСОВ
//                   ТУТ ВСЕ ДОЛЖНО ПРОИСХОДИТЬ КАК ОПИСАНО В ТИПАХ typeDefs

const resolvers={
    //                      ЗАПРОСЫ НА ОТОБРАЖЕНИЕ 
    Query:{
        //hello:()=>"Hello World",
        allItems:async ()=> Item.find(),
        findByName:async (parent,args,context,info)=>Item.findOne({name:args.name}),
        findById:async (parent,args,context,info)=>Item.findById(args.id),    
    },

    //                      ФУНКЦИИ КОТОРЫЕ КАК-ТО РЕДАКТИРУЮТ БД
    Mutation:{
        addItem:async(parent,args,context,info)=>{     //                           SHOW ALL
            const {description,name,number,discount,picture,price}=args.item;
            const item=new Item({description,name,number,discount,picture,price});
            await item.save();
            return item;
        },
        updateItem:async(parent,args,context,info)=>{ //                             UPDATING
            if(await Item.findById(args.id)){                
                // const {description,name,number,discount,picture,price}=args.item;
                // let item= await Item.findByIdAndUpdate(args.id,{description,name,number,discount,picture,price});  
                await Item.findByIdAndUpdate(args.id,{...args.item}) ;         
               return await Item.findById(args.id);
            }
            return "Item ID not found";
        },
        delItem:async(parent,args,context,info)=>{  //                               DELETE
            if(await Item.findById(args.id)){            
            await Item.findByIdAndDelete(args.id);
            return `Item is delete. - ${args.id}`;
            }
            return `Item not found`;
        }

    }
}

module.exports=resolvers;
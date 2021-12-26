const mongoose=require('mongoose');

//   ТУТ УКАЗЫВАЮТСЯ И ОПИСЫВАЮТСЯ ПОЛЯ С КОТОРЫМИ РАБОТАЕ МАНГУС В МАНГО.ДБ


const ItemSchema=new mongoose.Schema({ 
    name:{type:String,required:true}, //required : true - делает поле обязательным
    number:{type:Number},
    discount:{type:Number},
    picture:{type:String},
    description:{type:String},    
    price:{type:Number}
});

const Item=mongoose.model('item',ItemSchema);
module.exports=Item;
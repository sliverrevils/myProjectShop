

export const QUERYES={
    allItems:{query: ` {
    allItems {
      id
      name
      description
      number
      picture
      price
      discount
    }
  }`},

  delItem:id=>({query:`
  mutation{
      delItem(id:"${id}")
  }`}),

  addItem:(name="Test",
  description="description_test",
  number=22,
  picture="pic_test",
  discount=0,price=777)=>({query:`
  mutation{
    addItem (item:{
      name:"${name}" 
      description:"${description}"
      number:${number}
      price:${price}
      picture:"${picture}"
      discount:${discount}
      }){
        id
        name
        description
        number
        picture
        discount
      }
  }`}),

};
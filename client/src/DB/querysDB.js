export async function getAllItemsDB() {
    let arr = await fetch(
        'http://localhost:4000/items',
        {
            method: "Post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: ` {
                allItems {
                  id
                  name
                  description
                  number
                  picture
                  price
                  discount
                }
              }`
            })
        })
        .then(res => res.json())
        .then(data => data).catch(e=>console.error(e));
    //console.log("ARR", arr);
    return arr;
}

export const delItem=async id=>{
   
  await fetch('http://localhost:4000/items',{
      method:"Post",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
       body: JSON.stringify({
           query: ` mutation{
          delItem(id:"${id}")
              }`
       })
  })  
}


export const findById=async id=>
{
  const info = await fetch('http://localhost:4000/items',{
        method:"Post",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            query:` {
                findById(id:"${id}"){
                  id
                  name
                  description
                  number
                  picture
                  price
                  discount
                }
              }`
        })
    }).then(res=>res.json()).then(data=>{        
        return data});

        return info;
    
}
import axios from 'axios'; //https://stackoverflow.com/questions/52816623/graphql-post-request-in-axios

const URL='http://localhost:4000/items';


export const sendQuery=async(query)=>{
  
  const bd_data= await axios({
      url:URL,
      method:'post',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data:query
  }).then(res=>res.data.data.allItems);
  
  return bd_data;

}
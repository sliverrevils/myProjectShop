const $NAME=document.querySelector("#name");
const $AGE=document.querySelector("#age");
const $CITY=document.querySelector("#city");
const $OK=document.querySelector("#ok");

console.dir($OK);

// const validForm={
//     check(){
//         console.log(this);
//        return !!(this.name?.value&&this.age?.value&&this.city?.value)&&($OK.disabled=false);
//     }
// };

// function isVaild(event){
//     //console.log(event.target);
//     //validForm[event.target.id]={value:event.target.value.trim()};
//     event.target.id=="name"&&(validForm[event.target.id]={value:event.target.value=event.target.value.trim()});
//     event.target.id=="name"&&(validForm[event.target.id].error=event.target.value.length<=3&&"Min 4 letter");
// }

// [$AGE,$CITY,$NAME].forEach(e=>e.addEventListener('input',isVaild));



const formFields={}

const errorShow=()=>{
   document.querySelector("#error").innerHTML="dsdds";
}

function isVaild(event) {
    switch (event.target.id) {
        case "name": {
            event.target.value=event.target.value.trim();
            formFields.name={error:!(event.target.value.length>=5&&event.target.value.length<=10)};                       
            break;
        }
        case "age": {
            formFields.age={error:event.target.value<18};
            event.target.value.length>1&&(event.target.value=(event.target.value).substring(0,2));
            break;
        }
        case "city": {            
            break;
        }

        default: false;
    }
    errorShow();
}



[$AGE,$CITY,$NAME].forEach(e=>e.addEventListener('input',isVaild));





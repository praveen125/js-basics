// function check(age){
//     if(age>18){
//         console.log("major");

//     }else{
//         console.log("minor");
//     }
// }
// check (18);

// function check(age){
//     if(age>18){
//         return ("major");

//     }else{
//         return("minor");
//     }
// }
// console.log(check (18));

 

function greet(name){
    console.log("hi"+name);
}
greet("praveen");

greet=(name)=>{
    return ("hi "+name);
}
console.log  (greet("praveen"))

// function  check(name1,name2){
//     // console.log(name1 +" and " + name2+ " are friends");
//     console.log(`${name1} and ${name2} are friends`); // `${}`
// }
// check("praveen","nagu");

function check(name,age,qualification){
  console.log(`i am ${name} of ${age} years old and completed my ${qualification}`)
}
check("praveen",23,"btech");
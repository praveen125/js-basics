// person={
//     name:"praveen",
//     age:23,
//     gender:"male",
// }
// console.log(person.name);
// console.log(person);
// person.qualification="btech";
// person = {...person, qualification:"ssc" }
// console.log(person);



// function display(a){
//     if(a>20){
//     console.log("greater");
// }else{
//     console.log("less");
// }

// }
// display (10);

// arr = [1,2,3,"praveen"]

// for(i=0;i<4;i++){
// console.log(arr[i]);
// }



// arr = [1,99,65,87,35,98,32,65,98,23,55]

// num = arr.filter(a => a>50).sort((a,b)=> a+b)

// console.log(num);

// persons = [
//     {name:"vinay", age:23, gender:"male"},
//     {name:"komali", age:19, gender:"female"},
//     {name:"ramu", age:22, gender:"male"},
//     {name:"sravani", age:18, gender:"female"},
//     {name:"praveen", age:21, gender:"male"}
// ]
// console.log(persons[0].age);
// persons.map(p=>console.log(p))

// sortP = persons.sort((a,b) => a.name.localeCompare(b.name))
// .filter(p => p.gender!="male")

// console.log(sortP);

// sortP = persons.sort((a,b) => a.age +10+ b.age +10).filter(p=>p.age +10)

// console.log(sortP);


// persons.map(p => p.age = p.age+10)

// console.log(persons);

// persons[persons.length] = {name:"giri", age:20, gender:"male"}
// console.log(persons);

// persons.map(p => console.log(p.gender));

persons = [
    {name:"praveen",age:23},
    {name:"ravi",age:21}
]
 persons.map(person => person.gender = "male");
 persons[persons.length] = {name:"suresh",age:27,gender: "male"}
 persons[persons.length] = {name:"ramesh",age:25,gender: "male"}
 persons[persons.length] = {name:"ganesh",age:28,gender: "male"}

//  console.log(persons);

//  sortP = persons.sort((a,b) => a.age - b.age);

// //  console.log(sortP);

//  persons.map(p=> p.age = p.age+10);
//  persons.map(p=>p.gender = "female");

//  console.log(persons);
 
//   index = persons.map((p) => p.gender = persons.indexOf(p)%2==0 ? "female" : "male");
//  console.log(index);
//  console.log(persons);

var age = 25

// if(age>18) {
//     console.log("major")
// } else {
//     console.log("minor")
// }


//ternery operator

// condition ? true : false

// age >18 ? console.log('major')  : console.log("minor")

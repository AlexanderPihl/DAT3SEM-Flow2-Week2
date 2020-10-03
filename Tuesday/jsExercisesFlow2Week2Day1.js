var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];
console.log("Assigment 1");
 
//opg. 1a
function myFunctionA2(array){
  let list = array.filter(function(name){
    let list = name.toLowerCase();
    return list.includes("a");
  })
  return list;
}

let namesIncludeA = myFunctionA2(names);
console.log(namesIncludeA);

//opg. 1b
function myFunctionB2(array){
  return array.split("").reverse().join("");
}
let namesReversed = names.map(myFunctionB2);
console.log(namesReversed);

console.log("_________________________________");

//opg. 2a.
console.log("Assigment 2");

function myFilter(array, callback) {
    let namesWitLetterA = array.filter(nms => nms.includes("a"));
    callback(namesWitLetterA);
}

function myResult(result) {
    console.log(result);
}

myFilter(names, myResult); 

//opg. 2b.
function myFilter2(array, callback) {
  let namesReverse = array.split("").reverse().join("");
  callback(namesReverse);
}

function myResult2(result) {
  console.log(result);
}

myFilter2(names+"", myResult2);

console.log("_________________________________");

//opg. 3a.
console.log("Assigment 3");

var numbers = [1,3,5,10,11];

var result = numbers.map(
  //                |------------------if else------------------| //before ? is if, after ? do this. after : is else
    (x, idx, arr) => idx < arr.length - 1 ? x + arr[idx + 1] : x);

console.log(result);

//opg. 3a another way
var numbers = [1,3,5,10,11];
var result = [];

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i + 1])
        result.push(numbers[i] + numbers[i + 1]);
    else
        result.push(numbers[i]);
}

//console.log(result);

//opg 3b.
let names2 = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

function function3b(array, callback) {
  let n2 = "<nav>"+array.map(x => "<a href=””>" + x).join("</a>") + "</nav>";
  callback(n2);
}

function myResult4(result) {
  console.log(result);
}

function3b(names2, myResult4);

//opg. 3c.
var persons = [
  {name:"Hassan",phone:"1234567"}, 
  {name: "Peter",phone: "675843"}, 
  {name: "Jan", phone: "98547"},
  {name: "Boline", phone: "79345"}
];

var personsToTable = "<table><thead><tr><th>Name</th><th>Phone</th></tr></thead><tbody>" + persons.map(function (person) {
  return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>";
}).join("") + "</tbody><table>";

console.log(personsToTable);

console.log("_________________________________");

//opg 4a.
console.log("Assigment 4");

var all= ["Hassan", "Peter", "Carla", "Boline"];

function function4a(array, callback) {
  let all = array.join("#");
  callback(all);
}

function myResult5(result) {
  console.log(result);
}

function4a(all, myResult5);

//opg 4b.
const numbers2 = [2, 3, 67, 33];

totalValue = numbers2.reduce((total,currentElement)=>{return total+currentElement});
console.log(totalValue);

//opg 4c.
const members = [
  {name : "Peter", age: 18},
  {name : "Jan", age: 35},
  {name : "Janne", age: 25},
  {name : "Martin", age: 22}]

//age = numbers2.reduce((total,currentElement)=>{return total+currentElement/members.length});
//console.log(age);

let getAverage = arr => {
  let reducer = (total, currentValue) => total + currentValue;
  let sum = arr.reduce(reducer)
  return sum / arr.length;
}

let ages = members.map(members => members.age);

console.log(getAverage(ages));

//opg 4c.
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

var initialValue = {}

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var result4 = votes.reduce(reducer, initialValue)

console.log(result4);

//opg. 4c. Different solution
const votes2 = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

result = votes2.reduce((accu, candidate) =>{
    accu[candidate] = accu[candidate] ? accu[candidate] + 1 : 1;
    return accu;
},{});
console.log(result);

console.log("_________________________________");

//opg 5a.
console.log("Assigment 5");
var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var getCarBrand = car.getBrand;

getCarBrand();   // output: undefined

console.log("getCarbrand is a reference to getBrand() and not car.getBrand().");
console.log("getCarBrand holds a plain function which is no longer a method of the car object.");
console.log("this.brand now translates to window.brand which's in this case is undefined.");

console.log("_________________________________");


//opg 6.2.
console.log("Assigment 6");
function MyObject(name, age) {
  let setName = name,
  setAge = age

  const getInfo = () => {
      return [setName, setAge].join(", ")
  }

  const setFullName = n => {
      setName = n
  }
  const setFullAge = a => {
      setAge = a
  }

  return {
      getInfo,
      setFullName,
      setFullAge
  }
}

console.log(MyObject("Peter","45").getInfo());


console.log("_________________________________");

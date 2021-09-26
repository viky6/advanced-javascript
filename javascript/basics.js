//1. Javascript data types -> Primitive/Non-primitive
//Primitive -> (can store only one value) String, Number, boolean, bigint, undefined, null
//Non-Primitive -> (can store multiple/complex value) object, array
//object example :
let object = {
   a: 'data1',
   b: 'data2' 
}
console.log('object', object);

//array example :
let array = [1,2,3,4,5];
console.log('array', array);

/******************************************************/
//2. Hoisting in javascript
hoistedvarible = 2;
var hoistedvarible;
console.log('hoistedvarible', hoistedvarible);

/******************************************************/
//3. Comparison Operators:
let cp = 2;
let co = '2';
console.log('check value', cp==co);
console.log('check value & data type', cp===co);

/******************************************************/
//4. Coercion in javascript -> string, number
let str1 = 3;
let str2 = '3';
console.log('string coercion', str1+str2);
console.log('number coercion', str1-str2);
//if, AND &&, OR ||

/******************************************************/
// 5. Javascript static type or dynamic type ?
// Dynamic type 
let dynamic = 3;
dynamic = '3'
console.log('dynamic', typeof dynamic);

/******************************************************/
// 6. NAN in Javascript -> not a number
console.log(isNaN('hello'));
console.log(isNaN('2'));

/******************************************************/
// 7. Pass by value & Pass by reference 
// pass by value are primitive data type
var x = 2;
var y = 234;
var z = y;
console.log('pass by value', z);
//pass by reference are non-primitive data type
let pbf = {
    a: 1,
    b: 2
}
let obj1 = pbf
console.log('pass by ref', obj1);

/******************************************************/
// 8. Immediately innvoked function
// IIFE
(function first(){
    console.log('IIFE');
})();

/******************************************************/
// 9. Higher order function
// functions that operate on other functions

function higherOrder(){
    return function(){
        return 'test order';
    }
}
let ho = higherOrder()
console.log('higherOrder', ho());

/******************************************************/
//10. this keyword in javascript
let keyObj = {
    name: 'key',
    data: function(){
        console.log('this', this.name);
    }
};
// console.log('this', keyObj.data());

/******************************************************/
//11. call(), apply(), bind()
//call() -> this method invokes a function by specifiying main obj

function calling() {
    return 'data' + this.name;
}
let obj = {
    name: 'test'
}
console.log('call()', calling.call(obj));

//apply()
function applying(data){
    return 'hello' + this.name + data
}
console.log('apply()', applying.apply(obj, ['df']));

//bind()
function binding(data, arg){
    return 'hello' + this.name + data + arg
}
let bindrr = binding.bind(obj, 'data', 'arg')
console.log('apply()', bindrr());

/******************************************************/
// 12. Currying in javascript
function add(a){
    return function(b){
        return a + b
    }
}
console.log(add(1)(2));

/******************************************************/
// 13. Scopes & chain scope in javascript
// global, local, block
var q = 1

function chain(){
    let c = 1;
    console.log('q', q);
}
// console.log('c', c);
console.log('chain', chain());

/******************************************************/
// 14. Closure in Javascript
// an inner function always has access to the vars and parameters of its outer function
let closure = (a)=>{
    console.log('inside closure');
    let display =()=>{
       console.log(a);
    }
    return display;
}
let xe = closure('success');
xe();

/******************************************************/
// 15. Object Prototype
var proto = [];
proto.push('1');
console.log('proto', proto);

/******************************************************/
// 16. Callback in javascript
// a function passed into another function as an argument to be executed later
function cj(a, b, callback){
    let val = a + b;
    callback(val)
}
function getResult(result){
    console.log('callback', result);

}
cj(2,2, getResult)

/******************************************************/
// 18. constructor function in javascript
// Constructor functions are used to create objects in javascript.
class Person {
    constructor(name, age, code) {
        this.name = name,
            this.age = age,
            this.code = code;

    }
}
let person1 = new Person('vi', 20, 'ed')
console.log('person1', person1);

/******************************************************/
// 19. DOM in javascript
// Document object model
// {/* <html>
//     <head>
//         <title>
//             Hello
//         </title>
//     </head>
//     <body>
//         <i>hi</i>
//     </body>
// </html> */}
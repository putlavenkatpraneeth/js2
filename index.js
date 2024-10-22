let x = 5;
let y = x;
x = 10;
console.log(x);//10
console.log(y);//5,because here the value of y=x and the value of x=5.

let obj1 = {name: "Alice" };
let obj2 = {obj1};
obj1.name = "Bob";
console.log(obj1.name);//Bob
console.log(obj2.name);//undefined because here the obj2 value is not with key

let a = "hello";
let b = 42;
let c = true;
let d = { key: "value" };
let e = null;
let f = undefined;
console.log(typeof a);//string
console.log(typeof b);//number
console.log(typeof c);//boolean
console.log(typeof d);//object
console.log(typeof e);//object because here the output is null,but the type is object so takes as an empty object
console.log(typeof f);//undefined because here the f value is variable 

let numbers = [10,20,30,40,50];
console.log(numbers[2]);//30
console.log(numbers[0]);//10
console.log(numbers[numbers.length-1]);//50  because here the lenght=5,so lenghth-1=4,the 4th element is 50

let fruits = ["apple","banana","mango"];
fruits[1] = "orange";
console.log(fruits);//"apple","banana","mango"

let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][2]);//6
console.log(matrix[2][0]);//7

let person = { name:"john",age:25,city:"New york"};
console.log(person.name);//john
console.log(person.age);25

let car = {make:"toyoto",model:"Corolla",year:"2021"};
console.log(car["make"]);//toyoto
console.log(car["model"]);//Corolla

let book = {titlt:"THe Great Gatsby",author:"F.Scott Flitzgerald"};
book.author = "Anonymous";
console.log(book.author);//anonymous because here the book.author contains the value of Anonymous

let student = {name:"Alice",grade:"A"};
student.age = 20;
console.log(student);//name: 'Alice', grade: 'A', age: 20









// let y = "5";
// console.log(typeof y);  // Output: "string"

// let x = +"t";  // The unary plus converts 'y' from string to number
// console.log(typeof x);  // Output: "number"

// let x = 123;
// console.log(typeof String(x));
// console.log(typeof String(123));
// // console.log(typeof String(100 + 23));

// console.log((5 + null) + "\n" + 
//             ("5" + null) + "\n" + 
//             ("5" + 2) + "\n" + 
//             ("5" - 2) + "\n" + 
//             ("5" * "2") + "\n" + 
//             ("5" / "2"));


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 8){
//         console.log("8 is best number ")
//     }
//     console.log(element)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);

//     console.log(i + '*' + j + ' = ' + i*j );
   
// }
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// let obj = {name: "t"};

// for (let key of obj){
//   console.log(key, obj[key]); // name Amit, age 25, city Delhi
// }

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello_world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// // console.log(map);


// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, ':-', value);
    
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(programming[key])
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key,value] of map) {
//     console.log(key);
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
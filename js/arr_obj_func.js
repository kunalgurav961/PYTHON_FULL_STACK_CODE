// console.log("==== output ====")

// function declaration
// function myFunc(name) {
//     console.log(`Hello, ${name}`)
//     return 'string';
// }

// function call 
// myFunc("Sakshi", 123)
// console.log(myFunc())


// let myFunc = function (name) {
//     let hi = `Hello, ${name}`
//     return hi
// }

// console.log(myFunc("Juee"))

// let arrFunc = (name) => {
//     return `Hi, ${name}`
// }
// console.log(arrFunc("Jack"))


// Array - it is a collection of elements
// let students = ['juee', 'sakshi', 'nidhi']
// console.log(students[1])


// Object - It is a collection of key value pairs
// let user = {
//     name: 'kunal',
//     email: 'kunal@gmail.com',
//     password: '123123213',
//     lang: ['Marathi', 'English', 'Sanskrit', 'hindi'],
//     likes: 0,
//     doLike: () => {
//         user.likes++;
//     }
// }
// user.doLike()
// user.doLike()
// console.log(user);


function hello(params) {
    let data = params("Nidhi ")
    console.log(data)
}

// explicit return
// hello((name)=>{return "Hello, " +name})
// implicit return
// hello((name)=> "Hello, " + name)


// hello(name => "Hello, " + name)

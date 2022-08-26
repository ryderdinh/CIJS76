// // Non destructuring
// const person = { name: 'MindX', age: 20, data: { school: 'abc' } }

// // const name = person.name;
// // const age = person;
// console.log(`Name: ${person.name} - Age: ${person.age}`)

// // // const coordinate = [0, 1, 1];
// // // const x = coordinate[0];
// // // const y = coordinate[1];
// // // const z = coordinate[2];

// Destructuring
// const person = { name: 'MindX', age: 7, data: { school: 'abc' } }
// const { name, age, data } = person

// console.log(data)

const coordinate = [0, 1, 1]
const [x, y, z, k] = coordinate

console.log(...x)

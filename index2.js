const jsonString = `{
"name":"Anton",
"age":36,
"skills":["Javascript","HTML","CSS"],
"salary":80000}`

const person = JSON.parse(jsonString);


const result = {
    name: person.name,
    age: Number(person.age),
    salary: Number(person.salary),
    skills: person.skills
}

console.log('result', result);
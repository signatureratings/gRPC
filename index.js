const fs = require('fs')
const employees = []

employees.push({
    'name': 'John',
    'salary': 50000,
    'age': 27,
    'position': 'Developer',
    'id': 1
})

employees.push({ 
    'name': 'Jane',
    'salary': 60000,
    'age': 30,
    'position': 'Manager',
    'id': 2
})

employees.push({
    'name': 'Jack',
    'salary': 40000,
    'age': 25,
    'position': 'Designer',
    'id': 3
})

// just to see what is the size of the json object
// JSON does not have a strict schema unline protocol buffers
// fs.writeFileSync('employees.json', JSON.stringify(employees))


const Schema = require('./employees_pb')
const fs = require('fs')

const sairam = new Schema.Employee()
sairam.setId(100)
sairam.setName('Sairam')
sairam.setSalary(100000)
sairam.setAge(22)
sairam.setPosition('Software Engineer')

const yagna = new Schema.Employee()
yagna.setId(101)
yagna.setName('Yagna')
yagna.setSalary(100000)
yagna.setAge(23)
yagna.setPosition('Data Scientist')

const employees = new Schema.Employees()
employees.addEmployee(sairam)
employees.addEmployee(yagna)

const bytes = employees.serializeBinary()
fs.writeFileSync('employees.bin', bytes)

console.log('Bytes: ', bytes)
const final_data = Schema.Employees.deserializeBinary(bytes)
console.log('Final Data: ', final_data.toString())
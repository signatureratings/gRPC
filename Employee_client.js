const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the generated proto file
const packageDefinition = protoLoader.loadSync('protos/Employees/employees.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const { ruparking } = grpc.loadPackageDefinition(packageDefinition);

// Create a gRPC client
const client = new ruparking.employee.EmployeeService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Make a gRPC request
const employeeId = { id: 123 };
client.GetEmployee(employeeId, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Employee:', response);
});

client.AddEmployee({
    id: 123,
    name: 'John Doe',
    age: 30,
    salary: 35000,
    position: 'Software Engineer',
}, (error, response) => {
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    console.log('Employee:', response);
});

client.GetAllEmployees({}, (error, response) => {
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    console.log('Employees:', response);
})
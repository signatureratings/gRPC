const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const sqlite3 = require('sqlite3');

// Load the generated proto file
const packageDefinition = protoLoader.loadSync('protos/Employees/employees.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const { ruparking } = grpc.loadPackageDefinition(packageDefinition);

const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.run('CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, salary INTEGER, position TEXT)');

// Implement the EmployeeService server
const server = new grpc.Server();
server.addService(ruparking.employee.EmployeeService.service, {
  GetEmployee: (call, callback) => {
    // Implement the logic to get an employee by ID
    const employeeId = call.request.id;
    // Your implementation here...
    db.get('SELECT * FROM employees WHERE id = ?', [employeeId], (err, row) => {
    if(err) {
        console.error(err.message);
        callback({
            code: grpc.status.INTERNAL,
            details: 'Error retrieving employee from the database',
          });
  
    }
    else if(!row){
        callback({
            code: grpc.status.NOT_FOUND,
            details: 'Employee not found',
          });
    }
    else{
        const employee = {
            id: row.id,
            name: row.name,
            age: row.age,
            salary: row.salary,
            position: row.position,
          };
          callback(null, employee);
    }

    });
  },
    GetAllEmployees: (call, callback) => {
        // Implement the logic to get all employees
        // Your implementation here...
        db.all('SELECT * FROM employees', (err, rows) => {
            if(err) {
                console.error(err.message);
                callback({
                    code: grpc.status.INTERNAL,
                    details: 'Error retrieving employees from the database',
                  });
          
            }
            else{
                const employees = {
                    employee: rows.map(row => ({
                      employeeID: { id: row.id },
                      name: row.name,
                      salary: row.salary,
                      age: row.age,
                      position: row.position,
                    })),
                  };
                  callback(null, employees);
                }
        });
    },
    AddEmployee: (call, callback) => {
        // Implement the logic to add an employee
        // Your implementation here...
        const employee = call.request;
        db.run('INSERT INTO employees (name, age, salary, position) VALUES (?, ?, ?, ?)', [employee.name, employee.age, employee.salary, employee.position], function(err) {
            if(err) {
                console.error(err.message);
                callback({
                    code: grpc.status.INTERNAL,
                    details: 'Error adding employee to the database',
                  });
          
            }
            else{
                employee.id = this.lastID;
                callback(null, employee);
                }
        });
    },
});

// Start the gRPC server
const port = 50051;
server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), ()=>{
    server.start();
    console.log(`gRPC server started on port ${port}`);
    
});
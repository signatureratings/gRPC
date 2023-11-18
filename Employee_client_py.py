import sys,os
import grpc

script_dir = os.path.dirname(os.path.realpath(__file__))
proto_dir = os.path.join(script_dir, 'protos', 'Employees')
sys.path.append(proto_dir)

import protos.Employees.employees_pb2 as employees_pb2
import protos.Employees.employees_pb2_grpc as employees_pb2_grpc

def get_employee(stub, employee_id):
    request = employees_pb2.EmployeeID(id=employee_id)
    response = stub.GetEmployee(request)
    return response

def add_employee(stub, id, name, age, salary, position):
    employee = employees_pb2.Employee(
        employeeID=employees_pb2.EmployeeID(id=id),
        name=name,
        age=age,
        salary=salary,
        position=position
    )
    request = employees_pb2.Employee(employee=employee)
    response = stub.AddEmployee(request)
    return response.employeeID.id

def get_all_employees(stub):
    request = employees_pb2.Empty()
    response = stub.GetAllEmployees(request)
    return response.employee

def main():
    # Connect to the gRPC server
    channel = grpc.insecure_channel('localhost:50051')
    stub = employees_pb2_grpc.EmployeeServiceStub(channel)

    # Get an employee
    employee_id = 1
    employee = get_employee(stub, employee_id)
    print(f"Employee ID: {employee.employeeID.id}")
    print(f"Name: {employee.name}")
    print(f"Age: {employee.age}")
    print(f"Salary: {employee.salary}")
    print(f"Position: {employee.position}")

    # Add an employee
    new_employee_id = add_employee(stub, 23, "Yagna", 23, 60000, "Engineer")
    print(f"New Employee ID: {new_employee_id}")

    # Get all employees
    employees = get_all_employees(stub)
    for employee in employees:
        print(f"Employee ID: {employee.employeeID.id}")
        print(f"Name: {employee.name}")
        print(f"Age: {employee.age}")
        print(f"Salary: {employee.salary}")
        print(f"Position: {employee.position}")
        print()

if __name__ == '__main__':
    main()

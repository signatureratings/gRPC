# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/Employees/employees.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n protos/Employees/employees.proto\x12\x12ruparking.employee\"\x07\n\x05\x45mpty\"\x18\n\nEmployeeID\x12\n\n\x02id\x18\x01 \x01(\x05\"S\n\x08\x45mployee\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06salary\x18\x03 \x01(\x02\x12\x0b\n\x03\x61ge\x18\x04 \x01(\x05\x12\x10\n\x08position\x18\x05 \x01(\t\";\n\tEmployees\x12.\n\x08\x65mployee\x18\x01 \x03(\x0b\x32\x1c.ruparking.employee.Employee2\xf6\x01\n\x0f\x45mployeeService\x12K\n\x0bGetEmployee\x12\x1e.ruparking.employee.EmployeeID\x1a\x1c.ruparking.employee.Employee\x12K\n\x0fGetAllEmployees\x12\x19.ruparking.employee.Empty\x1a\x1d.ruparking.employee.Employees\x12I\n\x0b\x41\x64\x64\x45mployee\x12\x1c.ruparking.employee.Employee\x1a\x1c.ruparking.employee.Employeeb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protos.Employees.employees_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_EMPTY']._serialized_start=56
  _globals['_EMPTY']._serialized_end=63
  _globals['_EMPLOYEEID']._serialized_start=65
  _globals['_EMPLOYEEID']._serialized_end=89
  _globals['_EMPLOYEE']._serialized_start=91
  _globals['_EMPLOYEE']._serialized_end=174
  _globals['_EMPLOYEES']._serialized_start=176
  _globals['_EMPLOYEES']._serialized_end=235
  _globals['_EMPLOYEESERVICE']._serialized_start=238
  _globals['_EMPLOYEESERVICE']._serialized_end=484
# @@protoc_insertion_point(module_scope)

# gRPC
usage of GRPC using nodejs and python. grpc is used for remote procedure calls. it is better than basic json data format to transfer format. 

## Server is executed in nodejs and Client is in both nodejs and python

## gRPC uses HTTP 2 protocol which uses encryption and maintains the TCP conenction for longer time so you do not have to make the tcp connection for every single request and it is a bidirectional streaming.

## this project is to showcase gRPC protocol between two servers. mainly used this protocol in microservices to communicate b/w microservice. the datatransfer is fast becasue data is converted in binaryformat. unlike JSON file which takes so much of space. this thing can help reduce the space by 50%

## Also every service maynot understand the JSON Format javascript, python, Java are popular languages they can understand Json format but c++, go, etc programming languages do not use that much. this protos will give the data a structure. which helps while data transfer.

## we can call fucntions in other services just like local fucntions, hiding all the complexities.
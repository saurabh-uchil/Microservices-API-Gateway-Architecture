# Microservices-API-Gateway-Architecture
This project is a demonstration of Microservices architecture using Node.js and Express along with an API Gateway. The goal of this project is to showcase how multiple microservices can communicate with each other through an API Gateway and how each service can be independently deployed and scaled.
The architecture consists of multiple services (e.g., User Service, Product Service, Services Service) and an API Gateway that routes requests to the appropriate service.

# Technologies Used
Node.js: JavaScript runtime environment for building the server-side services.
Express.js: Web framework for building the services and API Gateway.
Axios: HTTP client for making requests between the API Gateway and the services.

# Running the Project
Start all the services and the API Gateways
command: node fileName.js
After all services are running, the API Gateway will be listening for incoming requests on port 3000. 
You can now make requests through the API Gateway, which will forward them to the appropriate service.
Sample Request:
http://localhost:3000/users

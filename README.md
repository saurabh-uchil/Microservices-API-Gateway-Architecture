# Microservices-API-Gateway-Architecture
This project demonstrates Microservices architecture using Node.js and Express along with an API Gateway. The goal of this project is to showcase how multiple microservices can communicate with each other through an API Gateway and how each service can be independently deployed and scaled.
The architecture consists of multiple services (e.g., User Service, Product Service, Services Service) and an API Gateway that routes requests to the appropriate service.

# Technologies Used
1. Node.js: JavaScript runtime environment for building server-side services.
2. Express.js: Web framework for building services and API Gateway.
3. Axios: HTTP client for making requests between the API Gateway and the services.

# Running the Project
1. Start all the services and the API Gateways

   command: node fileName.js
3. After all services are running, the API Gateway will listen to incoming requests on port 3000. 
4. You can now make requests through the API Gateway, which will forward them to the appropriate service.

   Sample Request:
http://localhost:3000/users

# Diagram
![Image](https://github.com/user-attachments/assets/e4355d29-8f33-4b94-80b2-03dbbe2114c3)

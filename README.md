# Storefront Backend Project

## Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
- bcrypt from npm for hashing

## Scripts
- DB:  creates the development DB, named store_front_db
- testDB:  creates the testing DB, named store_test_db
- migrateUp:  runs up migrations
- migrateDown:  runs down migrations
- start:  runs the server.ts file, port 3000
- migrateTest:  switches to testing env then: migrates up, builds all ts, runs all spec tests, migrates down, on the testing DB
- migrateUpTest:  switches to testing env then runs up migrations
- migrateDownTest: switches to testing env then runs down migrations

## Instructions
1. Run npm i, to install all the packages

2. create an .env file with the following:  
    PG_HOST=localhost  
    PG_DB=store_front_db  
    PG_TEST_DB=store_test_db  
    PG_USER=(PSQL username)  
    PG_PASS=(PSQL password)
    ENV=test  
    bcryptPass=cryptionpass  
    saltRounds=8  
    tokenSecret=secretToken  
    pepper=prepper  
    hostport=3000  

3. Set the DB port(Set to 5432 by default), as well as the user and password in database.json

4. Run the script: DB, to create the main database.

5. Run the script: testDB, to create the testing database.

6. Run the script: migrateUp, for the up migrations

7. Run the script: build, for ts building

8. Run the script: start, for starting the server

9. Use Postman to send the post requests, as well as access pages requiring JWT. Otherwise browser can be used.

10. create a user then add the response's token to requests requiring JWT

## Endpoints

### 1. http://localhost:3000/users
- users/ [GET][JWT]: returns all users in the DB
- users/ [POST]: inserts the user object provided in request.body, into the DB  

    **User Object Example**: {"id": "1", "firstName": "first name", "lastName": "last name", "password": "pass"} 

- users/:id [GET][JWT]: returns user with specified id
- users/remove/:id [POST][JWT]: deletes specified user from the table  

### 2. http://localhost:3000/products
- products/ [GET]: returns all products
- products/:id [GET]: returns specific product
- products/ [POST][JWT]: inserts the product object inside the request.body, into the DB  

    **product Object Example**: {"id": "1", "name": "product1", "price": "200", "token": "token from user creation goes here"}

- products/remove/:id [POST][JWT]: removes specified product  

### 3. http://localhost:3000/orders

- orders/:user_id [GET][JWT]: returns all orders made by a specific user
- orders/:user_id [POST][JWT]: inserts an order associated with a specific user, into orders table  

### 4. http://localhost:3000/orders_products
- orders_products/:order_id [GET]: returns all products in an order
- orders_products/:user_id&:order_id&:product_id&:quantity [POST]: inserts a row containing a product, its associated order, its user, its quantity
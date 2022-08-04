# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
### Products
- Index(route: 'products' [GET])
- Show(route: 'products/:id' [GET])
- Create(route: 'products' [POST]) [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

### Users
- Index(route: 'users' [GET]) [token required]
- Show(route: 'users/:id' [GET]) [token required]
- Create(route: 'users' [POST]) [token required]

### Orders
- Current Order by user(route: 'order/:id' [GET]) (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
### Product
- id
- name
- price
- [OPTIONAL] category
Table: Products (id:varchar, name:varchar, price:varchar)
### User
- id
- firstName
- lastName
- password

Table: Users (id:varchar, firstName:varchar, lastName:varchar, password:varchar)
### Orders
- id
- user_id
- status of order (active or complete)

Table: Users (id:varchar, user_id:string[foreign key to users table], status:varchar(active or complete))
### Order-Product
- id
- user_id
- order_id
- product_id
- quantity
- status of order

Table: order-product (
    id:varchar,
    user_id:string[foreign key to users table],
    order_id:string[foreign key to orders table],
    product_id:string[foreign key to product table],
    quantity:varchar,
    status:varchar(active or complete)
    )

/* Replace with your SQL commands */
CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR, price VARCHAR);
CREATE TABLE users (id SERIAL PRIMARY KEY, "firstName" VARCHAR, "lastName" VARCHAR, password VARCHAR);
CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id));
CREATE TABLE orders_products(id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), order_id INTEGER REFERENCES orders(id), product_id INTEGER REFERENCES products(id));
<<<<<<< HEAD
# Food Ordering API Service

This is a **Food Ordering API** service built with Node.js and MongoDB. It allows different user roles (Admins and basic Users) to interact with restaurants, menus, food items, and orders.

## Features

- **Admins** can:
    - Add, update, view, and delete restaurants
    - Manage menus and food items
    - View and update orders

- **Users** can:
    - View available restaurants and their menus
    - Place orders

---

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm i
3. start the server:
    ```bash
   npm run start
## API endpoints

**Authentication**

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| POST   | `api/user/signup` | Sign up     |
| POST   | `api/user/login`  | Log in      |

**Restaurants**

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `api/store`      | Get all restaurants |
| POST   | `api/store`      | Create a restaurant |
| DELETE | `api/store/:id`  | Delete a restaurant |
| PATCH  | `api/update/:id` | Update a restaurant |


**Menu**


| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | `api/menu`     | Get all menus |
| POST   | `api/menu`     | Create a menu |
| PATCH  | `api/menu/:id` | Update a menu |
| DELETE | `api/menu/:id` | Delete a menu |


**Order**

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `api/order/create` | Create a new order  |
| PATCH  | `api/order/:id`    | Update order status |
| GET    | `api/order`        | Get all orders      |

## Notes

- Make sure to set up your environment variables (e.g., database URI, JWT secret) via a config.env

- This API is designed for educational purposes and does not include production-level security or input validation.
## Project info

This is a school project making a RESTful API design and Mongoose.

Made by me, Lukas :)
=======
# Food Ordering API Service

This is a **Food Ordering API** service built with Node.js and MongoDB. It allows different user roles (Admins and basic Users) to interact with restaurants, menus, food items, and orders.

## Features

- **Admins** can:
    - Add, update, view, and delete restaurants
    - Manage menus and food items
    - View and update orders

- **Users** can:
    - View available restaurants and their menus
    - Place orders

---

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm i
3. start the server:
    ```bash
   npm run start
## API endpoints

**Authentication**

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| POST   | `api/user/signup` | Sign up     |
| POST   | `api/user/login`  | Log in      |

**Restaurants**

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `api/store`      | Get all restaurants |
| POST   | `api/store`      | Create a restaurant |
| DELETE | `api/store/:id`  | Delete a restaurant |
| PATCH  | `api/update/:id` | Update a restaurant |


**Menu**


| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | `api/menu`     | Get all menus |
| POST   | `api/menu`     | Create a menu |
| PATCH  | `api/menu/:id` | Update a menu |
| DELETE | `api/menu/:id` | Delete a menu |


**Order**

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `api/order/create` | Create a new order  |
| PATCH  | `api/order/:id`    | Update order status |
| GET    | `api/order`        | Get all orders      |

## Notes

- Make sure to set up your environment variables (e.g., database URI, JWT secret) via a config.env

- This API is designed for educational purposes and does not include production-level security or input validation.
## Project info

This is a school project making a RESTful API design using Mongoose.

Made by me, Lukas :)
>>>>>>> 89ef3577fb94b06609a30948b06758ca659e223e

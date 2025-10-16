# Grocery Store Inventory API

A simple inventory management system built with Node.js, Express, and MongoDB for learning purposes.

## 📖 About This Project

This project was created as a learning exercise to understand:

- Building RESTful APIs with Express.js
- Database operations with MongoDB and Mongoose
- CRUD (Create, Read, Update, Delete) operations
- API testing with Insomnia
- Basic backend development concepts

## 🗃️ Database Information

**Database Name:** `myfirstdatabase` (MongoDB)

This is a simple inventory management system for a grocery store, where you can store items with names and quantities. The database supports full CRUD operations (Create, Read, Update, Delete) through RESTful API endpoints.

**Collection:** `items`

### Data Structure

Each item contains:

- **name** (String): The name/title of the item (like apples, milk etc)
- **category** (String): The category of the item (Fruit, Dairy, Bakery)
- **price** (Number): The price of the item
- **quantity** (Number): The quantity/amount of the item in stock
- **\_id** (ObjectId): Automatically generated unique identifier (like: 68f0a607b470b47e0bc2b2c5)

## 🚀 API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/items`     | Retrieve all items      |
| POST   | `/items`     | Create a new item       |
| PUT    | `/items/:id` | Update an existing item |
| DELETE | `/items/:id` | Delete an item          |

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Insomnia** - API testing

## 📚 What I Learned

Through this project, I gained hands-on experience with:

- Setting up a Node.js backend server
- Connecting to MongoDB using Mongoose
- Creating RESTful API endpoints
- Handling HTTP requests and responses
- Database schema design and validation
- Testing APIs with Insomnia
- Version control with Git and GitHub
- CRUD operations in a real application

## 🏃‍♂️ Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Make sure MongoDB is running on `localhost:27017`
4. Start the server: `node index.js`
5. The API will be available at `http://localhost:3000`

## 📷 Screenshots

### MongoDB Database Setup

![MongoDB Compass showing database and collection](path/to/compass-screenshot.png)
_MongoDB Compass showing the `myfirstdatabase` with `items` collection and sample grocery data_

### API Testing - CRUD Operations

#### GET Request - Fetch All Items

![GET request showing all items](path/to/get-request.png)
_GET request to `/items` endpoint showing all grocery items in the database_

#### POST Request - Create New Item

![POST request creating new item](path/to/post-request.png)
_POST request to `/items` endpoint creating a new "Oranges" item_

#### PUT Request - Update Item

![PUT request updating item](path/to/put-request.png)
_PUT request to `/items/:id` endpoint updating Apples quantity to 30_

#### DELETE Request - Remove Item

![DELETE request removing item](path/to/delete-request.png)
_DELETE request to `/items/:id` endpoint successfully removing an item_

---

_This project was created as part of a backend development course to learn fundamental concepts of API development and database integration._

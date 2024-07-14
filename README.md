Food Del
Overview
Food Del is a comprehensive food delivery platform that includes a backend, frontend, and an admin panel. It provides users with a seamless experience to browse and order food, manage their orders, and interact with their profile. The admin panel allows administrators to manage orders, users, and product listings effectively.

Table of Contents
Features
Technologies Used
Frontend
Setup
Components
Backend
Setup
Endpoints
Admin Panel
Setup
Features
Deployment
Contributing
License
Features
User Interface:

Browse food menu and items.
Add items to the cart and proceed to checkout.
Manage user profile and view order history.
Support for dark mode and light mode.
Backend:

RESTful API for managing orders, users, and products.
Integration with Stripe for payment processing.
User authentication and authorization.
Admin Panel:

View and manage all orders.
Manage users and update their details.
Add, update, and delete products.
Technologies Used
Frontend:

React
Tailwind CSS
Axios
React Router DOM
React Toastify
Backend:

Node.js
Express.js
MongoDB
Mongoose
Stripe API
Admin Panel:

React (similar stack to frontend)
Frontend
The frontend is built using React and styled with Tailwind CSS. It provides an interactive and responsive user interface.

Setup
Clone the Repository:
git clone https://github.com/yourusername/food-del.git
cd food-del/frontend

Install Dependencies:
npm install

frontend_url: http://localhost:5173
backend_url: http://localhost:5174

Run the Development Server:
npm start
The application will be accessible at http://localhost:4001.

Components
Navbar: Provides navigation links and user profile options.
Home Page: Displays featured food items and promotional content.
Menu Page: Shows the list of food items available for order.
Cart Page: Allows users to review and proceed with their order.
Profile Page: Enables users to manage their profile and view their orders.
Orders Page: Lists all orders for the admin to manage.
Backend
The backend is built using Node.js and Express.js, with MongoDB for data storage and Stripe for payment processing.

Setup
Navigate to the Backend Directory:
cd backend

Install Dependencies:
npm install
Create a .env File:

Add your environment variables in a .env file:
PORT=4000
MONGO_URI=mongodb://localhost:27017/food-del
STRIPE_SECRET_KEY=your_stripe_secret_key

Run the Development Server:
npm start
The server will be accessible at http://localhost:4001.

Endpoints
POST /api/order/place - Place a new order.
POST /api/order/verify - Verify payment status of an order.
POST /api/order/userorders - Retrieve orders for a user.
GET /api/order/list - Retrieve all orders (admin only).
Admin Panel
The admin panel is integrated into the frontend application and allows administrators to manage various aspects of the platform.

Setup
Follow the same setup instructions as for the frontend. Ensure that you have the necessary admin permissions to access the admin features.

Features
Order Management: View and manage all orders placed by users.
User Management: View and edit user details.
Product Management: Add, update, or delete food items from the menu.
Deployment
For deployment, you can use platforms like Heroku, AWS, or DigitalOcean. Ensure that your environment variables are set correctly and that you have configured the deployment scripts for both frontend and backend.

Contributing
If you wish to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

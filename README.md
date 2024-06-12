# Web Application with User Authentication and CRUD Operations

## Project Setup

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd asmt
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm start
    ```

### Backend
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables in a `.env` file:
    ```
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
4. Start the server:
    ```bash
    node server.js
    ```

## Overview

This web application includes user authentication (registration and login) and CRUD operations on a list of items. Users can add, update, and delete items, as well as filter and sort the displayed items.

## Assumptions

- The application assumes a single category per item.
- No pagination is implemented for the item list.
- Basic error handling is implemented for demonstration purposes.

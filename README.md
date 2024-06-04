# Al-Kassis Backend Demo

## Description

This repository contains the backend API for the Al-Kassis full stack application, created to ease and accelerate a production process.

## Backend Architecture

The API is structured into several key components:

- **connect**: Connects to the database.
- **routes**: Defines the API routes.
- **controllers**: Handles requests and responses, interacting with the database.
- **models**: Defines the schema for each MongoDB collection.
- **errors**: Provides custom error classes.
- **utils**: Contains utility functions.
- **index.js**: Integrates all components (database connection, routes, Express middleware) and runs the application.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Nad1m-A-A/backend-demo.git
   ```

2. Navigate to the project directory and install dependencies:

   ```sh
   cd backend-demo
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   URI_MONGOOSE=your-mongodb-connection-string
   APP_BASE_URL=your-app-base-url
   ```

4. Start the application:
   ```sh
   npm start
   ```

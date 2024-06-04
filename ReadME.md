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

## Frontend Overview
The application consists of the following pages:
1. **Chemicals**: A visual repository to track the amount of available chemicals, with a threshold to display a warning when the amount is running low.
2. **Alloy**: A static page displaying information about the default alloy.
3. **Press**: This section contains three pages: Shapes, Orders, and Production.
    - **Shapes**: Stores and displays shape details such as name, width, length, and thickness.
    - **Orders**: 
        - Stores and displays orders
        - Calculates the needed amount of metal/gold for each order based on:
            - Order size.
            - Dimensions of the used shapes.
            - Dimensions of the default alloy.
        - Includes a "group" button, useful when an order contains shapes with significantly different widths. Grouping ensures more accurate weight calculations by accounting for the width variations.
    - **Production**:
        - Tracks each order's production status and updates the Orders page accordingly.
        - Displays production data (length, width, count) to ease the production process.

## Installation
To set up the application locally:

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

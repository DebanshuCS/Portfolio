```markdown
# Portfolio

A personal website for Debanshu Das. This website serves as a hub for showcasing his work, experience, and skills. It is designed to be used as a portfolio for applying to new jobs and research positions.

## Overview

### Architecture

The project consists of two parts:
1. **Frontend:** A ReactJS-based application located in the `client/` folder, developed using the Vite devserver.
2. **Backend:** An Express-based server located in the `server/` folder that implements REST API endpoints, with MongoDB as the database.

### Technologies

- **Frontend:**
  - ReactJS and Vite
  - Tailwind CSS with shadcn-ui component library
  - Client-side routing using `react-router-dom`
  - Port: 5173 (for user testing)
  
- **Backend:**
  - ExpressJS
  - MongoDB with Mongoose for database operations
  - Port: 3000

### Project Structure

The primary structure of the project is as follows:

- `client/`: Contains the frontend code.
  - `src/`
    - `api/`: Contains API request files with mocked data.
    - `components/`: Contains reusable UI components.
    - `pages/`: Contains page components.
    - `types/`: Contains TypeScript interfaces.
    
- `server/`: Contains the backend code.
  - `routes/`: Contains the routing logic for the API.
  - `models/`: Contains Mongoose models for MongoDB collections.
  - `services/`: Contains business logic for interacting with the database.
  - `config/`: Contains configuration files for database connections.

## Features

- **Profile Management:** Fetches and displays user profile data including projects, publications, and experience.
- **Responsive Layout:** UI adapts to various screen sizes for optimal viewing on any device.
- **Dark Mode Support:** User can toggle between light and dark themes.
- **User Notifications:** Toast notifications for error handling and user feedback.
- **Mock API Data:** Frontend API requests are mocked to simulate backend responses during development.

## Getting Started

### Requirements

To run this project, you need to have the following installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

### Quickstart

1. Clone the repository:
   ```sh
   git clone https://github.com/debanshudas/portfolio.git
   cd portfolio
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the `server/` directory with the following content:
   ```env
   DATABASE_URL=mongodb://127.0.0.1:27017/portfolio
   PORT=3000
   ```

4. Start the development servers:
   ```sh
   cd ../client
   npm run start
   ```

   This command uses Concurrently to run both the client and server concurrently.

5. Access the app at `http://localhost:5173` for frontend and `http://localhost:3000` for backend API.

### License

The project is proprietary (not open source). 
```
Copyright (c) 2024.
```
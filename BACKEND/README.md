# Portfolio Backend API

A RESTful backend API that powers a personal portfolio website. This API manages user authentication, projects, skills, timeline entries, and more.

## Features

- Complete user authentication with JWT tokens
- CRUD operations for portfolio projects
- Skill management
- Timeline entries
- Software application showcase
- Contact form messaging system
- File uploads with Cloudinary integration
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication
- Cloudinary (for image and file storage)
- bcrypt (for password hashing)
- Nodemailer (for sending emails)

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd BACKEND
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a config file at `./config/config.env` with the following variables:
   ```
   PORT=8000
   MONGO_URI=<your-mongodb-connection-string>
   PORTFOLIO_URL=<your-frontend-url>
   DASHBOARD_URL=<your-dashboard-url>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   JWT_SECRET=<your-jwt-secret>
   JWT_EXPIRE=<jwt-expiration-time>
   COOKIE_EXPIRE=<cookie-expiration-time>
   SMTP_HOST=<smtp-host>
   SMTP_PORT=<smtp-port>
   SMTP_USER=<smtp-user>
   SMTP_PASS=<smtp-password>
   MY_MAIL=<your-email-address>
   ```

4. Run the server
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### User Management
- `POST /api/v1/user/register` - Register a new user
- `POST /api/v1/user/login` - Login
- `GET /api/v1/user/logout` - Logout
- `GET /api/v1/user/me` - Get user profile

### Projects
- `GET /api/v1/project` - Get all projects
- `POST /api/v1/project/create` - Create a new project
- `PUT /api/v1/project/:id` - Update a project
- `DELETE /api/v1/project/:id` - Delete a project

### Skills
- `GET /api/v1/skill` - Get all skills
- `POST /api/v1/skill/create` - Add a new skill
- `PUT /api/v1/skill/:id` - Update a skill
- `DELETE /api/v1/skill/:id` - Delete a skill

### Timeline
- `GET /api/v1/timeline` - Get all timeline entries
- `POST /api/v1/timeline/create` - Add a timeline entry
- `PUT /api/v1/timeline/:id` - Update a timeline entry
- `DELETE /api/v1/timeline/:id` - Delete a timeline entry

### Software Applications
- `GET /api/v1/softwareapplication` - Get all software applications
- `POST /api/v1/softwareapplication/create` - Add a software application
- `PUT /api/v1/softwareapplication/:id` - Update a software application
- `DELETE /api/v1/softwareapplication/:id` - Delete a software application

### Messages
- `POST /api/v1/message/send` - Send a message
- `GET /api/v1/message/get` - Get all messages
- `DELETE /api/v1/message/:id` - Delete a message

## Project Structure

```
BACKEND/
├── app.js              # Express application setup
├── server.js           # Server entry point
├── database/           # Database connection
├── models/             # Mongoose schemas
├── controller/         # Route controllers
├── router/             # API routes
├── middlewares/        # Custom middleware
├── utils/              # Utility functions
└── config/             # Configuration files
```

## License

ISC

## Author

[subhadip] 

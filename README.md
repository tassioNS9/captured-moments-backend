# Captured Moments Backend

This is the backend service for the Captured Moments application, a system that allows users to register and manage their memorable moments with images and stories.

## Technologies

- **Node.js** with **TypeScript**
- **Fastify** - Fast and low overhead web framework
- **Prisma** - Modern database ORM
- **MongoDB** - NoSQL Database
- **JWT** - For authentication
- **Multer** - For file uploads
- **bcrypt** - For password hashing

## Project Structure

The project follows a service-oriented architecture with the following structure:

- `controllers/` - Request handlers and business logic coordination
- `services/` - Business logic implementation
- `middleware/` - Authentication and request processing
- `prisma/` - Database schema and configurations
- `uploads/` - Storage for uploaded files

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:
```properties
DATABASE_URL="your_mongodb_connection_string"
ACCESS_TOKEN_SECRET="your_jwt_secret"
```

4. Set up Prisma:
```bash
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

## Main Features

- User authentication (register/login)
- CRUD operations for moments
- File upload for images
- Date-based filtering of moments
- Search functionality
- Favorite moments management

## API Endpoints

- **Auth:**
  - POST `/auth/register` - Register new user
  - POST `/auth/login` - User login
  - GET `/auth/user` - Get user information

- **Moments:**
  - POST `/moments` - Create new moment
  - GET `/moments` - Get all moments
  - PUT `/moments/:id` - Update moment
  - DELETE `/moments/:id` - Delete moment
  - GET `/moments/search` - Search moments
  - PUT `/moments/favorite/:id` - Toggle favorite status

- **Files:**
  - POST `/upload` - Upload files
  - DELETE `/upload/:filename` - Delete files

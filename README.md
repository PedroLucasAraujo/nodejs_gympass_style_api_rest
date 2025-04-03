# GymPass Style App

## Overview
This project is a REST API for a GymPass-style application that provides various functionalities for user authentication, gym check-ins, and gym management.

## Features
### Functional Requirements (RFs)
- Users can register an account.
- Users can authenticate.
- Logged-in users can retrieve their profile.
- Logged-in users can get the number of check-ins they have made.
- Users can view their check-in history.
- Users can search for nearby gyms (within 10km).
- Users can search for gyms by name.
- Users can check-in at a gym.
- Admins can validate user check-ins.
- Admins can register new gyms.

### Business Rules (RNs)
- Users cannot register with a duplicate email.
- Users can only perform one check-in per day.
- Users can only check-in if they are within 100 meters of the gym.
- Check-ins can only be validated within 20 minutes of creation.
- Only administrators can validate check-ins.
- Only administrators can register gyms.

### Non-Functional Requirements (RNFs)
- User passwords are encrypted.
- Application data is stored in a PostgreSQL database.
- Data lists are paginated (20 items per page).
- Users are identified via JWT (JSON Web Token).

## Tech Stack
This project was built using the following technologies:
- **Node.js** - JavaScript runtime
- **Docker** - Containerization
- **JWT (JSON Web Token)** - Authentication
- **SOLID principles** - Software architecture
- **Design Patterns** - Code structure optimization
- **RBAC (Role-Based Access Control)** - Access control
- **Refresh Token** - Token refresh mechanism
- **Vitest** - Testing framework
- **Prisma** - ORM for database management
- **TypeScript** - Strongly typed JavaScript
- **Day.js** - Date/time management
- **Bcrypt** - Password hashing
- **Fastify** - Web framework for Node.js
- **Zod** - Data validation

## Setup
To run the project locally, follow these steps:
1. Clone the repository:
   ```sh
   git clone [<repository-url>](https://github.com/PedroLucasAraujo/nodejs_gympass_style_api_rest)
   cd nodejs_gympass_style_api_rest
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Docker container:
   ```sh
   docker-compose up -d
   ```
4. Run database migrations:
   ```sh
   npx prisma migrate dev
   ```
5. Start the server:
   ```sh
   npm run dev
   ```

## Testing
To run tests, use:
```sh
npm run test
```

## License
This project is licensed under the MIT License.

---
Feel free to contribute and improve this project!

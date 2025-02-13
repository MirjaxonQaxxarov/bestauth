# BestAuth - Authentication Service

BestAuth is a modern authentication service built with the NestJS framework. This project provides a secure and scalable solution for user registration, login, and management.

## Technologies

- NestJS v10  
- TypeORM  
- MySQL  
- Express  
- TypeScript  
- Class Validator  
- Crypto-JS  

## Installation

1. Clone the repository:  
```bash
git clone https://github.com/MirjaxonQaxxarov/bestauth.git
cd bestauth
```

2. Install dependencies:  
```bash
npm install
```

3. Create a `.env` file and configure the settings:  
```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
```

## Running the Application

To start the project in development mode:  
```bash
npm run start:dev
```

For production build and execution:  
```bash
npm run build
npm run start:prod
```

## API Endpoints

The project provides two main API categories:

### Front API  
Endpoints designed for web applications.  

### Mobile API  
Dedicated API endpoints for mobile applications.  

## Security Features

- **Request Throttling** – Limits the number of requests to prevent abuse.  
- **Class Validation** – Ensures input data is properly validated.  
- **Crypto-JS** – Encrypts sensitive data for added security.  

## Testing

Run unit tests:  
```bash
npm run test
```

Run end-to-end (E2E) tests:  
```bash
npm run test:e2e
```

## License  

[UNLICENSED]  

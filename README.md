# Auth-App

A simple authentication API where users can register, login, and access protected routes.

## About This Project

This is a RESTful authentication API built as a backend service for user management and authentication. The project demonstrates how to implement secure user authentication using modern web technologies.

The API provides essential authentication features including user registration with secure password hashing, login functionality with JWT token generation, and role-based access control to protect routes. It follows best practices for security by using bcrypt for password encryption and JWT for stateless authentication.

This project serves as a foundation for any application that needs user authentication and can be easily integrated with any frontend framework or mobile application.

## What it does

- **User Registration**: Create new accounts with username, email, and password
- **Secure Login**: Authenticate users and provide JWT tokens
- **Password Security**: Hash passwords using bcrypt before storing in database
- **Role-Based Access**: Differentiate between regular users and admin users
- **Protected Routes**: Restrict access to certain endpoints based on authentication
- **Token Validation**: Verify JWT tokens on protected routes

## Built with

- **Node.js** - Runtime environment
- **Express** - Web framework for building the API
- **MongoDB** - NoSQL database for storing user data
- **Mongoose** - ODM for MongoDB data modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Library for hashing passwords
- **dotenv** - Environment variable management
- **CORS** - Enable cross-origin requests

## Live Demo

Try it here: https://auth-app-6ym5.onrender.com

## API Documentation

See all endpoints and how to use them: https://documenter.getpostman.com/view/45894584/2sB3dPTB6w

## Project Structure

- **Controllers** - Business logic for user operations
- **Database** - MongoDB connection configuration
- **Middleware** - Authentication and authorization middleware
- **Models** - User schema and database models
- **Routers** - API route definitions

# Hooshino Innovations - Company Website

## Overview

This is a modern company website for Hooshino Innovations, a Canadian AI company specializing in ethical AI, multilingual NLP, knowledge graphs, and decision intelligence. The project is built as a full-stack web application with a React frontend and Express.js backend, featuring a dark-themed, tech-focused design with cyan and violet accent colors. The site includes sections for hero content, company information, specialties showcase, technology features, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme and gradient designs
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for SSR-like development experience
- **Storage Interface**: Abstract storage layer with in-memory implementation for users
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Error Handling**: Centralized error middleware with status code handling

### Database and ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table with username/password fields
- **Migrations**: Drizzle Kit for schema migrations
- **Database Provider**: Configured for Neon Database (serverless PostgreSQL)

### UI Design System
- **Theme**: Dark mode with custom CSS variables
- **Typography**: Inter font family
- **Color Scheme**: Neutral base with cyan (#00BFFF) and violet (#A855F7) accents
- **Components**: Modular component architecture with consistent styling patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Development Workflow
- **TypeScript Configuration**: Strict mode with path aliases for clean imports
- **Code Quality**: ESLint-ready setup with TypeScript strict checking
- **Hot Reload**: Vite HMR integration for rapid development
- **Asset Management**: Vite-based asset bundling and optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend Framework**: Express.js with TypeScript support
- **Build Tools**: Vite, TypeScript compiler, PostCSS

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe SQL toolkit and query builder
- **Drizzle Kit**: Schema management and migration tool
- **PostgreSQL Driver**: Neon serverless driver for database connections

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management
- **Lucide React**: Icon library for UI elements

### Form and Data Management
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Validation schema integration
- **TanStack React Query**: Server state synchronization and caching
- **Zod**: Schema validation library

### Development and Deployment
- **Replit Integration**: Replit-specific plugins for development environment
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and compilation
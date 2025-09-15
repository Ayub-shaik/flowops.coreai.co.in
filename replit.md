# Overview

FlowOps CoreAI is a comprehensive AI-powered development platform that transforms plain English descriptions into production-ready applications. The system provides a full-stack solution spanning from natural language processing to automated deployment, targeting complexity levels from C1 (simple web pages) to C5 (enterprise-grade applications). The platform emphasizes enterprise security, compliance, and white-label capabilities while maintaining developer-friendly workflows.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**React 18 + TypeScript Stack**: The client application uses React 18 with TypeScript, built with Vite for fast development and optimized production builds. The architecture follows a component-based approach with clear separation of concerns.

**Routing Strategy**: Uses Wouter for lightweight client-side routing, managing navigation between key pages including Home, Features, Security, Pricing, ROI Calculator, Customers, FAQ, and Demo booking.

**UI Component System**: Built on shadcn/ui components with Radix UI primitives, providing accessibility-first design patterns. The design system uses Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes.

**State Management**: Utilizes TanStack Query for server state management and data fetching, with custom query client configuration for API interactions and caching strategies.

**Design Philosophy**: Implements a "New York" style design system with Inter and JetBrains Mono fonts, following enterprise-grade visual patterns inspired by modern SaaS products like Notion and Linear.

## Backend Architecture  

**Express.js Server**: Node.js backend with Express framework providing RESTful API endpoints. The server includes middleware for JSON parsing, URL encoding, and request logging with performance metrics.

**Development Tooling**: Vite integration for hot module reloading and development server functionality, with custom error handling and runtime error overlays.

**Storage Abstraction**: Implements a storage interface pattern with both in-memory and database implementations, allowing for flexible data persistence strategies.

**Session Management**: Configured for cookie-based sessions with credentials inclusion for authentication workflows.

## Data Storage Solutions

**PostgreSQL Integration**: Configured with Drizzle ORM for type-safe database interactions and schema management. The database schema includes user management with UUID primary keys and proper indexing.

**Schema Definition**: Uses Drizzle with PostgreSQL dialect, providing migration support and type inference. Database credentials managed through environment variables with proper error handling for missing configurations.

**In-Memory Storage**: Fallback storage implementation using Map-based data structures for development and testing scenarios.

## Authentication and Authorization

**User Management System**: Database schema supports user accounts with username/password authentication, using Drizzle Zod schemas for validation and type safety.

**Session Security**: Cookie-based session management with proper credential handling and security headers.

**Future Extensibility**: Architecture designed to support enterprise authentication methods including SSO, SAML, and OAuth integrations.

## Component Architecture Patterns

**Reusable UI Components**: Comprehensive component library including navigation, hero sections, pricing tables, ROI calculators, testimonials, and security compliance displays.

**Layout System**: Consistent layout wrapper with fixed navigation and footer, providing unified page structure across all routes.

**Interactive Elements**: Advanced components like tabbed tech stack showcases, carousel testimonials, and accordion FAQ sections with proper accessibility support.

**SEO Integration**: Built-in SEO component for managing meta tags, Open Graph data, and search engine optimization across all pages.

## Build and Development Infrastructure

**Vite Configuration**: Custom Vite setup with React plugin, path resolution aliases, and development-specific tooling including Replit integration for cloud development environments.

**TypeScript Configuration**: Comprehensive TypeScript setup with path mapping, strict type checking, and proper module resolution for both client and server code.

**Asset Management**: Integrated asset handling for images and static content with proper import resolution and optimization.

# External Dependencies

## Core Development Framework
- **React 18**: Frontend framework with concurrent features and improved performance
- **TypeScript**: Type-safe development with comprehensive configuration
- **Vite**: Build tool and development server with fast HMR and optimized production builds
- **Express.js**: Node.js web framework for API and server-side functionality

## UI and Design System
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and theming
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components for complex interactions
- **Lucide React**: Icon library with consistent SVG icons

## Data Management
- **Drizzle ORM**: Type-safe PostgreSQL integration with migration support
- **PostgreSQL**: Primary database for production data storage
- **TanStack Query**: Server state management and data fetching library
- **Zod**: Schema validation for runtime type checking

## Development and Build Tools
- **PostCSS**: CSS processing with Tailwind integration
- **Autoprefixer**: Automatic vendor prefix handling for cross-browser compatibility

## Typography and Assets
- **Google Fonts**: Inter and JetBrains Mono font families loaded via CDN
- **Custom Asset Management**: Local asset handling for images and generated content

## Cloud Development Integration
- **Replit Plugins**: Development environment integration with cartographer and error modal plugins for cloud-based development workflows
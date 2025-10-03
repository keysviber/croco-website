# Croco Interiors - Premium Interior Design Website

## Overview

Croco Interiors is a modern, responsive website for a premium interior design company specializing in European-style luxury interiors, custom kitchens, office furniture, home bars, wine cellars, and built-in storage solutions. The application is built as a single-page application with a focus on showcasing the company's portfolio and enabling easy customer contact through WhatsApp integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React Single Page Application (SPA)**
- Built with React 18 and TypeScript for type safety and modern development practices
- Uses Vite as the build tool for fast development and optimized production builds
- Implements client-side routing with Wouter for lightweight navigation
- Structured as a component-based architecture with reusable UI components

**Styling and Design System**
- Utilizes Tailwind CSS for utility-first styling with extensive customization
- Integrates shadcn/ui component library for consistent, accessible UI components
- Implements a comprehensive design system with custom color palettes, typography, and spacing
- Supports both light and dark themes with CSS custom properties
- Uses Google Fonts (Inter, Playfair Display) for premium typography

**State Management and Data Fetching**
- TanStack React Query for server state management and caching
- Local component state for UI interactions and form handling
- Toast notifications system for user feedback

### Backend Architecture

**Express.js Server**
- Node.js/Express.js backend with TypeScript
- Modular route structure with separation of concerns
- Custom error handling middleware
- Development-specific Vite integration for HMR and asset serving

**Database Layer**
- PostgreSQL database with Drizzle ORM for type-safe database operations
- Neon Database serverless PostgreSQL for cloud hosting
- Schema-first approach with Zod validation for runtime type checking
- Migration support through Drizzle Kit

**Storage Interface**
- Abstracted storage layer with IStorage interface
- In-memory storage implementation for development
- Designed for easy extension to full database implementation
- CRUD operations for user management

### Component Architecture

**Page Structure**
- Single main page (`Home`) containing all sections
- Modular component sections: Hero, Services, About, Gallery, Contact, Footer
- Responsive navigation with mobile hamburger menu
- Floating WhatsApp contact button for persistent customer engagement

**UI Components**
- Comprehensive shadcn/ui component library integration
- Custom components for business-specific functionality
- Gallery with image modal, carousel, and categorization features
- Interactive contact forms with validation and submission handling

**Design Patterns**
- Reference-based design approach inspired by premium kitchen design companies
- European luxury aesthetic with clean lines and sophisticated visuals
- Mobile-first responsive design with progressive enhancement
- Accessibility considerations with proper ARIA labels and semantic markup

### Build and Development

**Development Workflow**
- TypeScript for type safety across frontend and backend
- Hot module replacement (HMR) in development
- Path aliases for clean imports (@/, @shared/, @assets/)
- Comprehensive component examples for development reference

**Production Build**
- Vite build optimization for frontend assets
- esbuild for backend compilation
- Static asset optimization and bundling
- Environment-specific configurations

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server
- **Wouter**: Lightweight client-side routing

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **Zod**: Runtime type validation and schema validation

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built accessible React components
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

### State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form

### Image and Media Handling
- **Embla Carousel**: Carousel component for image galleries
- Static image assets stored in attached_assets directory
- Image optimization through Vite build process

### Development and Build Tools
- **ESBuild**: Fast JavaScript bundler for backend
- **PostCSS**: CSS processing with Autoprefixer
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit

### Communication Integration
- **WhatsApp Business API**: Direct integration for customer communication
- Phone number integration for direct calling capabilities
- Email contact functionality

### Utility Libraries
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component
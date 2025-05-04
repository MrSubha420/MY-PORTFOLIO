# Portfolio Dashboard

A modern React-based admin dashboard for managing your personal portfolio. Built with Vite, Redux Toolkit, and Tailwind CSS.

## Features

- **User Authentication**: Secure login system with password reset functionality
- **Skills Management**: Add, edit, and remove skills displayed on your portfolio
- **Timeline Management**: Control your professional/educational timeline entries
- **Project Management**: Manage your portfolio projects with detailed information
- **Software Applications**: Track software applications you've developed or worked with
- **Responsive Design**: Built with modern UI components from Radix UI

## Technology Stack

- **Frontend**:
  - React 18
  - Redux Toolkit (for state management)
  - React Router v6
  - Tailwind CSS (for styling)
  - Radix UI (for UI components)
  - React Hook Form (with Zod validation)
  - Axios (for API requests)

- **Build Tools**:
  - Vite (for fast development and optimized builds)
  - ESLint (for code quality)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components
  - `/lib`: Utility functions and shared code
  - `/pages`: Application pages
  - `/store`: Redux store configuration
    - `/slices`: Redux slices for state management
  - `App.jsx`: Main application component with routes
  - `main.jsx`: Entry point

## API Integration

The dashboard connects to a backend API for data management (hosted at https://portfolio-backend-actq.onrender.com/api/v1/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

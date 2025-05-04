# Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects and skills with a clean, professional design.

## 🚀 Features

- Responsive design that works on desktop and mobile
- Dark/Light mode toggle
- Project showcase with detailed project views
- Skills section with visual representations
- Contact form
- Modern UI with smooth transitions

## 🛠️ Technologies Used

### Core
- React.js
- Vite
- React Router for navigation
- Tailwind CSS for styling

### UI Components & Animation
- shadcn/ui components
- React Simple Typewriter for text animations
- React Scroll for smooth scrolling
- Tailwind CSS Animate for animations

### Form Management
- React Hook Form with Zod for validation
- Axios for API requests

### Icon Libraries
- Lucide React for UI icons (Moon, Sun, X, Check, ChevronRight, Circle)
- React Icons (AiOutlineClose)
- Font Awesome Icons (via @fortawesome/react-fontawesome and @fortawesome/free-solid-svg-icons)

### Notifications
- React Toastify for toast notifications

## 📦 Project Structure

```
src/
├── assets/       # Static assets and images
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and helpers
├── pages/        # Main page components
│   ├── miniComponents/  # Smaller components used in pages
│   ├── Home.jsx         # Home page
│   ├── ProjectView.jsx  # Individual project display
│   ├── Footer.jsx       # Site footer
│   └── sidebar.jsx      # Sidebar navigation
└── App.jsx       # Main application component
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
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

## 🎨 Customization

The project uses Tailwind CSS for styling, which can be customized in the `tailwind.config.js` file. The color scheme, typography, and other design elements can be adjusted there.

## 📄 License

[MIT License](LICENSE)

# MovieMaster Pro 🎬

## 📖 Overview
MovieMaster Pro is a comprehensive movie management web application that empowers users to browse, add, edit, delete, and manage their personal movie collections and watchlists. Built with modern web technologies, it offers a seamless user experience with authentication, protected routes, and full CRUD operations.



## 🛠️ Technology Stack

**Frontend:**
- React.js
- HTML5
- CSS3
- JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB 

**State Management & Routing:**
- React Router

**UI & Styling:**
- Tailwind CSS
- Custom CSS Components


**Additional Libraries:**
- React Toastify for notifications
- React Icons
- Carousel libraries


## Demo

Live URL : https://quiet-raindrop-9f5788.netlify.app

## 🖼️ Screenshots

### Homepage Dashboard
![MovieMaster Pro Dashboard](https://i.ibb.co/hbDW6Qm/Screenshot-2025-11-19-103911.png)

## ✨ Key Features

- 🎠 **Dynamic Featured Carousel** - Interactive movie showcase
- 📝 **Full CRUD Operations** - Create, Read, Update, Delete movies  
- 🔐 **Protected Routes** - Secure authentication system
- ⭐ **Top Rated & Recent Movies** - Smart categorization
- 📋 **Personal Watchlist** - Manage your favorite movies
- 🌙 **Theme Toggle** - Light/Dark mode support
- ⏳ **Loading & Toast Notifications** - Enhanced user experience
- 🔍 **Advanced Filtering** - Search and filter movies efficiently



## 📦 Dependencies

### Frontend Dependencies
- react ^19.1.1
- react-dom ^19.1.1  
- react-router ^7.9.5
- framer-motion ^12.23.24
- react-icons ^5.5.0
- react-hot-toast ^2.6.0
- react-toastify ^11.0.5
- react-spinners ^0.17.0
- swiper ^12.0.3
- styled-components ^6.1.19
- sweetalert2 ^11.26.3

### Styling & UI
- tailwindcss ^4.1.17
- @tailwindcss/vite ^4.1.17
- daisyui ^5.4.7

### Backend & Services
- firebase ^12.5.0
- dotenv ^17.2.3
- helmet ^8.1.0

### Development Dependencies
- vite ^7.1.7
- @vitejs/plugin-react ^5.0.4
- eslint ^9.36.0
- @types/react ^19.1.16
- @types/react-dom ^19.1.9

## 🚀 Local Development Guide

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn or pnpm
- Git

### Installation Steps

## 1. Clone the Repository
```bash
git clone https://github.com/sanzida-urmi/MovieMaster.git
cd MovieMaster  
```


## 2.  Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 3. Environment Variables Setup
Create a .env file in the root directory and add:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 5. Open in Browser
Visit: http://localhost:5173



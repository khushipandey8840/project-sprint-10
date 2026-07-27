# E-Commerce SPA

## Overview
This project is a Single Page Application (SPA) built using React, Vite, and React Router DOM. It allows users to browse products, view product details, and navigate between pages without reloading the browser.

## Features
- Home Page
- Shop Page with Product Grid
- Dynamic Product Details Page
- Client-side Routing using React Router DOM
- Data fetched from DummyJSON API
- Responsive UI

## Technologies Used
- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS

## API
https://dummyjson.com/products

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project folder:
```bash
cd project-sprint-6
```

3. Install dependencies:
```bash
npm install
```

4. Install React Router DOM:
```bash
npm install react-router-dom
```

5. Start the development server:
```bash
npm run dev
```

## Build Project

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Loader.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── ProductDetails.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Routes

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/shop` | Product Listing |
| `/product/:id` | Product Details |

## Author

**Sakshi Pandey**
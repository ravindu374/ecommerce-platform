# E-Commerce Platform

A full-stack e-commerce web application for selling laptops and tech products, built with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Material-UI (MUI)** - React component library for modern UI design
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

## ✨ Features

- 🛍️ **Product Catalog** - Browse laptops with detailed information
- 🔍 **Advanced Filtering** - Filter products by brand, price, category, and ratings
- 🏷️ **Brand Navigation** - Quick filter by laptop brands (ASUS, MSI, Dell, HP)
- 📱 **Responsive Design** - Mobile-friendly interface with Material-UI
- 🔐 **User Authentication** - Secure login and registration
- 🛒 **Shopping Cart** - Add products and manage cart items
- 📦 **Order Management** - Place and track orders
- ⚡ **Real-time Updates** - Products update instantly without page reload

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/ravindu374/ecommerce-platform.git
cd ecommerce-platform
```

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Seed the database with sample products:
```bash
npm run seed:products
```

5. Start the backend server:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will run on `http://localhost:3000`

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:password@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_random_secret_key` |

**⚠️ Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

## 📁 Project Structure

```
ecommerce-platform/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware (auth)
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── seed/            # Database seeding scripts
│   ├── server.js        # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── theme/       # MUI theme configuration
│   │   ├── api.js       # Axios configuration
│   │   └── App.js       # Main App component
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🎯 Usage

1. Start both backend and frontend servers (in separate terminals)
2. Open your browser and navigate to `http://localhost:3000`
3. Browse products, filter by brand, and explore the catalog
4. Register a new account or login
5. Add products to cart and place orders

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products (supports `?brand=` query parameter)
- `POST /api/products` - Create a new product (admin)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Ravindu**
- GitHub: [@ravindu374](https://github.com/ravindu374)

## 🙏 Acknowledgments

- Material-UI for the component library
- MongoDB Atlas for database hosting
- Unsplash for product images

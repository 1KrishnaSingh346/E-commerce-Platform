# 🛒 Multi-Vendor E-commerce SaaS Platform

A full-stack **Multi-Vendor E-commerce SaaS** where multiple sellers can onboard, list products, manage orders, and track analytics, while users can browse, purchase, and track orders securely.

This project is built as a **real-world scalable MVP**, focusing on clean architecture, secure authentication, and production-ready features.

---

## 🚀 Key Highlights
- Multi-Vendor Architecture
- Secure Authentication (JWT + httpOnly cookies)
- Role-based Access (Admin / Seller / User)
- Payment Integration (Test Mode)
- Scalable Backend APIs
- Modern UI with Responsive Design

---

## 👥 User Roles

### 👤 User (Customer)
- Sign up / Login
- Browse products
- Search & filter products
- Add to cart
- Place orders
- Online payment
- Track order status
- View order history
- Manage profile

### 🧑‍💼 Seller (Vendor)
- Seller registration & login
- Create and manage products
- Upload product images
- Manage stock & pricing
- View received orders
- Update order status
- View sales analytics
- Manage seller profile

### 👑 Admin
- Admin authentication
- Approve / block sellers
- Manage users & sellers
- Manage product categories
- View platform-wide analytics
- Monitor orders & revenue

---

## 🧩 Core Features (MVP)

### 🔐 Authentication & Authorization
- User, Seller, Admin login/signup
- JWT-based authentication
- Secure session handling using httpOnly cookies
- Role-based protected routes

---

### 🛍️ Product Management
- Product listing by sellers
- Product categories & tags
- Image upload (Cloudinary)
- Stock & price management
- Product search & filters

---

### 🛒 Cart & Orders
- Add / remove items from cart
- Quantity update
- Order summary
- Order creation
- Order status tracking

---

### 💳 Payment Integration
- Razorpay / Stripe (Test Mode)
- Secure checkout flow
- Payment verification
- Order confirmation

---

### 📊 Dashboards
#### Seller Dashboard
- Total sales
- Orders received
- Revenue overview
- Product performance

#### Admin Dashboard
- Total users & sellers
- Total orders & revenue
- Platform analytics

---

### 📦 Order Management
- Order lifecycle (Placed → Processing → Shipped → Delivered)
- Seller order updates
- User order tracking

---

## 🧠 Optional Smart Features (Enhancement Ready)
- Product recommendations (logic-based / AI-ready)
- Review & rating system
- Wishlist
- Email notifications
- Coupon & discount system

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Redux Toolkit / Context API
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

### Services
- Cloudinary (Image Uploads)
- Razorpay / Stripe (Payments)
- MongoDB Atlas

---

## 🗂️ Project Structure (High Level)

/frontend
├── components
├── pages
├── services
├── store
└── utils

/backend
├── controllers
├── routes
├── models
├── middleware
└── config



---

## 🔐 Security Practices
- httpOnly cookies for JWT
- Password hashing
- Protected API routes
- Role-based access control
- Input validation

---

## 📈 Future Scope
- AI-based recommendations
- Seller subscription plans
- Real-time notifications
- Analytics charts
- Microservices architecture

---

## 📌 Status
**MVP under active development**

---

## 👨‍💻 Author
Built with ❤️ for learning, internships, and real-world scalability.



# Crochet Boutique E-Commerce Platform

## 1. Problem Statement

A full-stack e-commerce platform for a handmade crochet
business that allows customers to browse and purchase
handmade products online.

## 2. Actors

- Customer
- Admin
- Payment Gateway
- Delivery Service

## 3. Product Categories

- Crochet Flowers and Bouquets
- Crochet Plushies and Dolls
- Handmade Lamps and Decor
- Crochet Accessories
- Custom-Made Products

## 4. Functional Requirements

- Customer registration and authentication
- Google authentication
- Product browsing and searching
- Shopping cart and wishlist
- Checkout and order placement
- Online payment and Cash on Delivery
- Local delivery validation
- Custom product requests
- Admin product management
- Admin order management
- Inventory management

## 5. Non-Functional Requirements

- Scalability
- Availability
- Performance
- Security
- Reliability
- Maintainability
- Data Consistency

## 6. Initial Capacity Assumptions

- Registered Customers: 1000
- Daily Active Users: 100
- Products: 200
- Daily Orders: 20
- Peak Concurrent Users: 30

## 7. Initial Architecture Decision

Modular Monolithic Architecture with N-tier
separation of presentation, business logic,
and data access layers.

## 8. Initial Technology Stack

Frontend: React + Vite
Backend: Node.js + Express.js
Database: MongoDB Atlas
Authentication: Firebase Authentication
Cache: Redis (future integration)
Image Storage: Cloudinary
Hosting: Vercel + Backend Hosting Provider

# Database Design

## Database
MongoDB Atlas

## Collections
1. users
2. products
3. carts
4. orders
5. payments
6. customorders

## Relationships
- One user can have multiple orders.
- One user can have one active cart.
- One order can contain multiple products.
- One product can appear in multiple orders.
- One order can have payment records.

## Important Design Decisions

1. Firebase handles authentication.
2. MongoDB stores user profiles and roles.
3. Order items preserve product name and price snapshots.
4. Stock is validated during order placement.
5. Database indexes improve query performance.
6. Admin role is controlled by the backend.
# Request Lifecycle

## Example: Fetch Products

1. Customer opens the product page.
2. DNS resolves the website domain.
3. HTTPS establishes a secure connection.
4. React sends GET /api/products.
5. Express receives the API request.
6. Route forwards the request to the controller.
7. Controller calls the service.
8. Service requests product data from the repository.
9. Repository fetches data from MongoDB.
10. Backend returns a JSON response.
11. React displays the products.

## Backend Request Flow

Client
  -> Route
  -> Controller
  -> Service
  -> Repository
  -> Database

## Reverse Proxy

A reverse proxy sits between clients and backend
servers and forwards incoming requests to the
appropriate server.
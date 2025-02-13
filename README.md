<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1 align="center">NestJS Clarivate Products Backend</h1>

## Description
This repository hosts a URL shortener service developed using NestJS, a progressive Node.js framework. The primary purpose of this project is to shorten long URLs into concise, manageable links. Additionally, it offers analytical insights into the usage of these shortened URLs.

## Installation
1. Clone the repository to your local machine:
```bash
git clone https://github.com/Aman-Paul/clarivate-products-backend.git
```

2. Navigate to the project directory:
```bash
cd clarivate-products-backend
```

3. Install dependencies:
```bash
npm install
```

## Migrate schemas to the connected db
```bash 
# Push migrations to db 
npx prisma migrate deploy
```

## Running the app
```bash
# watch mode
npm run start:dev
```

## Test
```bash
# e2e tests
npm run test:e2e

```

## Important API endpoints
1. Get all Products
```bash
# Get all products
Type: GET
Endpoint: /products
Response: {
    "data": [
            {
                "id": 1,
                "productName": "Product 1",
                "description": "Description for Product 1",
                "price": "85.31",
                "stockQuantity": 125,
                "createdAt": "2025-02-13T18:51:53.936Z",
                "updatedAt": "2025-02-13T18:51:53.936Z",
                "category": {
                    "categoryName": "Sports & Outdoors",
                    "description": "Equipment and gear for sports"
                }
            },
            {
            "id": 2,
            "productName": "Product 2",
            "description": "Description for Product 2",
            "price": "61.87",
            "stockQuantity": 316,
            "createdAt": "2025-02-13T18:51:53.936Z",
            "updatedAt": "2025-02-13T18:51:53.936Z",
            "category": {
                "categoryName": "Furniture",
                "description": "All types of furniture"
                }
            },
            .....
            ],
            "total": 100
    }
```

## Stay in touch

- Author - Aman Paul
- Github - [https://github.com/Aman-Paul](https://github.com/Aman-Paul)
- LinkedIn - [My LinkedIn Profile](https://www.linkedin.com/in/aman-paul-js-stack/)

## License
Nest is [MIT licensed](LICENSE).

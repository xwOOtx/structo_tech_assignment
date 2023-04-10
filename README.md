# Structo Technical Assignment

## Getting started

### 1. Download and install dependencies

Install npm dependencies:
npm install

### 2. Start the app

npm start

## Testing

To run all tests:
npm test

To run specific test:
npm run test:unit:services
npm run test:unit:user
npm run test:integration:user

## REST API

### POST

- `/token`
  - Body:
    - `username: string` (required)
    - `password: string` (required)
- Response:

  - Body:
    - token:
      - `accessToken: string`
      - `refreshToken: string`

- `/refreshToken`
  - Header:
    - `Authorization: string` (required)
  - Body:
    - `username: string` (required)
    - `refreshToken: string` (required)
- Response:
  - Body:
    - token:
      - `accessToken: string`

### GET

- `/about`
  - Header: - `Authorization: string` (required)
- Reponse:
  - Body:
    - `Hello World`

## Using the REST API

### POST /token

curl -XPOST -H "Content-type: application/json" -d '{
"username": "structo_user",
"password": "NotAStrongPassword"
}' 'http://localhost:3000/token'

### POST /refreshToken

curl -XPOST -H 'Authorization: accessTokenFromLogin' -H "Content-type: application/json" -d '{
"username": "structo_user",
"refreshToken": "refreshTokenFromLogin"
}' 'http://localhost:3000/token'

### GET /about

curl -XGET -H 'Authorization: "accessTokenFromLogin"' -H "Content-type: application/json" 'http://localhost:3000/about'

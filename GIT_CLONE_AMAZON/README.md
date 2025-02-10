# Amazon Clone | Autumn MERN 2024' Explorin

This project is a clone of the Amazon website, built using the MERN stack (MongoDB, Express.js, React, Node.js). It aims to replicate the core functionalities of the Amazon e-commerce platform. **Please note that this project is still under development. It is being built during a live study session at Exploring Academy, as part of the autumn MERN batch.**

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Product listing and search
- Shopping cart functionality
- Order management
- Payment processing
- User profile management

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/amazon-clone.git
    ```
2. Navigate to the project directory:
    ```sh
    cd amazon-clone
    ```
3. Install server dependencies:
    ```sh
    cd server
    npm install
    ```
4. Install client dependencies:
    ```sh
    cd ../client
    npm install
    ```
5. Set up environment variables:
    - Create a `.env` file in the `server` directory and add the following:
        ```env
        MONGO_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        STRIPE_SECRET_KEY=your_stripe_secret_key
        ```
6. Start the development server:
    ```sh
    cd server
    npm run dev
    ```
7. Start the client:
    ```sh
    cd ../client
    npm start
    ```

## Usage

- Visit `http://localhost:3000` to view the application.
- Register or log in to your account.
- Browse products, add them to your cart, and proceed to checkout.

## Technologies

- **Frontend:**
  - React
  - [ future-asumption ] React Router (Could be used later)
  - [ future-asumption ] Redux / ContextAPI / Zustand (Could be used later)
  - [ future-asumption ] Fetch (Right Now) / Axios (Could be used later)
  - [ future-asumption ] Material-UI /  (Could be used later for learning) [highest chances, it wont be used]

- **Backend:**
  - [ future-asumption ] Node.js (Could be used later)
  - [ future-asumption ] Express.js (Could be used later)
  - [ future-asumption ] MongoDB (Could be used later)
  - [ future-asumption ] Mongoose (Could be used later)
  - [ future-asumption ] JWT (Could be used later)
  - [ future-asumption ] Stripe API (Could be used later)

## Project Structure

```
amazon-clone/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── ...
├── .gitignore
├── README.md
└── index.html
└── package.json
└── vite.config.js
└── eslint.config.js

---[ future-asumption ]---
amazon-clone-backend/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
├── .gitignore
├── README.md
└── package.json
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

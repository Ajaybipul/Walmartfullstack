Here's an expanded version of the project description, ensuring it meets the word count requirement:

---

### Walmart-Inspired E-Commerce Platform

**Description:**

This project is a full-stack, fully responsive e-commerce web application inspired by Walmart. It allows users to browse products, manage their shopping carts, and authenticate securely through a custom-built backend API. The platform supports a range of features including user registration, login, and product management. Users can explore the product catalog without logging in, but actions such as adding items to the cart, viewing the wishlist, or placing an order require authentication. The application leverages modern technologies like React.js, Redux Toolkit, and Express.js to create a seamless and scalable user experience. It also supports a secure payment gateway using Braintree and PayPal, allowing users to make payments directly through the platform.

The application’s frontend is built using **React.js** to provide a modular, component-driven UI architecture, combined with **Redux Toolkit** for state management. Styling is handled through **Tailwind CSS** for utility-first designs and **Chakra UI** for modern components. **MongoDB** serves as the database for storing product, user, and cart data, while the backend is developed using **Node.js** and **Express.js** for handling server-side logic. The application also integrates **JWT-based authentication** to securely manage user sessions across multiple tabs and browsers.

### Live Deployment

- **Frontend Live Demo:** [Frontend Deployment](https://relaxed-gumption-d49db8.netlify.app/)
- **Backend API Live Demo:** [Backend Deployment](https://walmartfullstack-1.onrender.com/)

### Tech Stack:

**Frontend:**

- **React.js:** Enables a modular approach to building user interfaces.
- **Redux Toolkit:** Manages global state for authentication, product data, and cart management, ensuring a smooth and consistent user experience.
- **Tailwind CSS & Chakra UI:** Combines Tailwind’s utility-first styling with Chakra UI’s modern components to create a sleek, responsive user interface that looks great across all devices.
- **React Router:** Handles navigation and routing within the app, providing a single-page application feel.
- **React Icons:** Ensures consistency in the iconography throughout the application, using a modern and visually appealing set of icons.

**Backend:**

- **Node.js & Express.js:** Forms the foundation of the backend API, handling routes, middleware, and business logic.
- **MongoDB:** Utilized for storing user, product, and cart data. Its flexibility and scalability make it ideal for handling complex e-commerce data structures.
- **Mongoose:** Provides a schema-based solution to model the data, making database interactions more straightforward.
- **JWT Authentication:** Implements secure authentication for login and signup, allowing users to maintain their sessions across multiple tabs and browser sessions.
- **Braintree & PayPal Integration:** Enables secure payment processing, allowing users to complete transactions seamlessly.

### Key Features:

1. **Walmart-Inspired UI:**
   - The application’s design is inspired by Walmart’s clean and user-friendly interface. The intuitive layout focuses on enhancing the user experience with straightforward navigation and clear product categorization.

2. **User Authentication:**
   - Secure JWT-based login and signup functionality is implemented through the backend API. Users can register and log in to the application, with authentication details managed directly in Redux for a seamless experience. JWT tokens are stored securely in localStorage and used to validate user sessions.

3. **Backend Cart Management:**
   - Users can add, remove, and view items in their shopping cart. The cart state is managed through Redux and is now integrated with backend support, allowing for data persistence across multiple sessions and scalability for future enhancements. The backend API validates and manages cart data, storing it securely in MongoDB.

4. **Payment Gateway Integration:**
   - Users have the option to select different payment methods such as Cash on Delivery or secure online payments via Braintree and PayPal. The backend handles the payment processing logic, ensuring secure transactions and storing the selected payment method in the database.

5. **Product Browsing Without Login:**
   - Users can explore the product catalog without needing to log in. However, actions like adding items to the cart or accessing the wishlist page will prompt them to log in or sign up, ensuring a personalized and secure experience.

6. **Authentication Redirects:**
   - The app handles redirects to the authentication page for unauthenticated users attempting to perform restricted actions like adding items to the cart or accessing the wishlist. This ensures that users are guided through the appropriate flow without encountering unexpected behavior.

7. **Responsive Design:**
   - The application is designed to be fully responsive, ensuring a consistent user experience across different devices and screen sizes. Tailwind CSS provides utility-first styling, while Chakra UI contributes modern, responsive components that adapt dynamically to varying screen resolutions.

8. **Search Functionality:**
   - An integrated search bar allows users to find products quickly. The search component supports real-time filtering and suggestions, making it easier for users to navigate to their desired products.


9. **State Management:**
    - Redux Toolkit is used to manage the global state of the application. It handles authentication, product data, and cart data, ensuring a seamless flow of information across different components. This makes debugging easier and enhances application performance.

### Setup and Access Instructions:

**Prerequisites:**

- Node.js installed
- npm for managing dependencies
- MongoDB Atlas account for database access

**Frontend Setup:**

1. **Clone the Repository:**

```bash
git clone https://github.com/Ajaybipul/Walmart.git
```

2. **Navigate to the Project Directory:**

```bash
cd Walmart
```

3. **Install Dependencies:**

```bash
npm install
```

4. **Run the Application:**

```bash
npm run dev
```

**Backend Setup:**

1. Set up the `.env` file with the following details:

```
# MongoDB connection string
MONGO_URI=mongodb+srv://ajayyadavbipul2003:Ajay1224@walmart.v8i7g.mongodb.net/?retryWrites=true&w=majority&appName=walmart

# JWT secrets
JWT_SECRET=YourUniqueAndSecureJWTSecret
JWT_REFRESH_SECRET=YourUniqueAndSecureJWTRefreshSecret

# Braintree keys for payment
BRAINTREE_MERCHANT_ID=kyytk8m2dxd25zkk
BRAINTREE_PUBLIC_KEY=7t36y6qmq2bp78ns
BRAINTREE_PRIVATE_KEY=97d6deb9982364e25223f6162e658324
```

2. **Run the Backend Server:**

```bash
npm run server
```

### Development Process:

**Planning & Design:**

The UI was planned with Walmart as the design inspiration. A clean layout, intuitive navigation, and modern product display features were prioritized to create a user-friendly experience. Tailwind CSS was chosen for its utility-first styling, while Chakra UI provided accessible and responsive components to enhance the design.

**Backend Integration:**

The backend was developed using Express.js and MongoDB to manage user, product, and cart data. A separate API for handling registry management and payment processing was created, enabling a complete e-commerce solution.

### Key Learnings:

- **State Management with Redux Toolkit:** This project deepened my understanding of global state management using Redux Toolkit, especially for handling complex states like cart data and user authentication.
  
- **Backend Development with Express and MongoDB:** I enhanced my skills in developing a robust backend, managing multiple models, and implementing secure authentication.
  
- **Payment Integration:** Implementing Braintree and PayPal for payments was a valuable experience, showcasing secure payment handling and real-world transaction management.

**Author:**  
Ajay Yadav  


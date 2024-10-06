
### Walmart-Inspired E-Commerce Platform

**Description:**

This project is a full-stack, fully responsive e-commerce web application inspired by Walmart. It allows users to browse products, manage their shopping carts, and authenticate securely through a custom-built backend API. The platform supports a range of features, including user registration, login, and product management. Users can explore the product catalog without logging in, but actions such as adding items to the cart, viewing the wishlist, or placing an order require authentication. The application leverages modern technologies like React.js, Redux Toolkit, and Express.js to create a seamless and scalable user experience. It also supports a secure payment gateway using Braintree and PayPal, allowing users to make payments directly through the platform.

The frontend is built using **React.js** to provide a modular, component-driven UI architecture, combined with **Redux Toolkit** for state management. Styling is handled through **Tailwind CSS** for utility-first designs and **Chakra UI** for modern components. **MongoDB** serves as the database for storing product, user, and cart data, while the backend is developed using **Node.js** and **Express.js** for handling server-side logic. The application also integrates **JWT-based authentication** to securely manage user sessions across multiple tabs and browsers.

**Netlify Deployment: [Live Demo](https://relaxed-gumption-d49db8.netlify.app/)**  
**Backend Deployment: [Backend API](https://walmartfullstack-1.onrender.com/)**

### Tech Stack:

- **React.js**: Offers a modular, component-driven UI architecture.
- **Redux Toolkit**: Manages global state for cart, authentication, and product data.
- **Tailwind CSS & Chakra UI**: Combines utility-first styling and Chakra’s modern UI components for a responsive and intuitive user interface.
- **Node.js & Express.js**: Backend for server-side logic, handling requests and responses, and integrating the MongoDB database.
- **MongoDB**: Stores product, user, and order details for the application.
- **React Router**: Ensures smooth navigation between pages.
- **React Icons**: Provides consistent and modern iconography across the application.
- **Git**: Facilitates efficient version control.
- **Braintree & PayPal**: Implements secure payment processing for checkout and order placement.

### Key Features:

**1. Walmart-Inspired UI:**  
The application’s design draws inspiration from Walmart’s clean, user-friendly interface. It is intuitive and straightforward, focusing on enhancing user experience with clear navigation and layout.

**2. User Authentication:**  
Secure JWT-based login and signup functionality is implemented via a custom backend. Users can register, log in, and maintain their session across different tabs and browsers. Authentication details are managed directly in Redux and persisted using localStorage.

**3. Cart Management with Redux:**  
Users can add, remove, and view items in their shopping cart. The cart state is efficiently managed through Redux and persisted using localStorage, ensuring that users’ cart data remains intact even after they close or refresh the browser.

**4. Product Browsing Without Login:**  
Users can browse the product catalog without needing to log in. However, when they attempt to add items to the cart or visit the wishlist page, they are prompted to log in or sign up.

**5. Secure Payment Gateway:**  
The application supports secure payment processing through Braintree and PayPal, enabling users to place orders using various payment methods.

**6. Search Functionality:**  
The integrated search bar allows users to find products quickly. Real-time filtering and suggestions ensure a smooth and effective search experience, guiding users to their desired items.

**7. Responsive Design with Tailwind CSS and Chakra UI:**  
The app is designed to be fully responsive. Tailwind CSS provides utility-first styling, while Chakra UI contributes modern, responsive components, ensuring the interface looks polished and functions well across all devices.

**8. Registry Page:**  
The backend also supports a registry page where users can create, update, and delete registry items. Other users can view these registry details.

**9. Order Management and Checkout:**  
Users can view their order history and use the checkout page to place orders. Orders include details such as products, quantity, price, and payment method.

### Challenges Faced:

**1. State Management Across Complex Components:**  
Managing state for the cart, product catalog, and authentication simultaneously posed a challenge, especially when these components interacted with each other. This was resolved by using Redux Toolkit’s `createSlice` and `createAsyncThunk` methods, which allowed for modular and scalable state management.

**2. Handling Authentication Redirects:**  
Unauthenticated users trying to add items to the cart were experiencing infinite redirects. To address this, I improved the handling of user states using Redux and conditional logic, ensuring smooth redirection only when necessary.

**3. Implementing Secure Payment Gateway:**  
Integrating Braintree and PayPal required additional steps to ensure the security of payment details and smooth transaction processing. Careful consideration of security practices and testing ensured the payment flow was error-free.

**4. Data Persistence Across Sessions:**  
Maintaining cart data and user sessions across different tabs and browsers was a challenge. This was handled by storing authentication tokens and cart data in localStorage, allowing data persistence even when the user closed or refreshed the browser.

**5. Cross-Origin Resource Sharing (CORS) Issues:**  
When making API calls to the backend from the frontend, I encountered CORS-related errors. This was resolved by configuring CORS middleware in the Express server, allowing requests from the frontend’s domain.

**6. Responsive UI Design for Multiple Devices:**  
Ensuring the UI design remained consistent and functional across all devices was difficult, especially when dealing with complex elements like carousels and dropdowns. I leveraged Tailwind CSS’s responsive utility classes and Chakra UI’s responsive components to maintain a consistent design.

### Best Practices:

**1. Modular Code Structure:**  
The project follows a modular structure, with separate folders for components, pages, Redux slices, and API services. This organization makes the codebase easier to navigate, debug, and scale.

**2. Secure JWT Authentication:**  
All sensitive operations are protected using JWT-based authentication, with access tokens being stored securely in Redux and localStorage. Refresh tokens ensure the user remains authenticated even after extended sessions.

**3. Effective State Management with Redux Toolkit:**  
Redux Toolkit is used for managing global state, ensuring a clear separation of concerns between the UI and business logic. This results in better performance, maintainability, and testing capabilities.

**4. Consistent Styling Approach:**  
The project uses a combination of Tailwind CSS and Chakra UI to ensure a cohesive and modern design language across all pages and components. This hybrid approach provides flexibility and ensures the UI remains polished and accessible.

**5. API Error Handling:**  
Proper error handling is implemented in both frontend and backend APIs. This includes displaying relevant error messages to users and logging errors in the backend for debugging purposes.

**6. Responsive Design Principles:**  
All components are designed to be fully responsive, with careful attention given to breakpoints, padding, and margins. This ensures the application looks and functions well on desktops, tablets, and mobile devices.

**7. Secure Payment Integration:**  
Payment gateway integration with Braintree and PayPal follows best practices to ensure the security and privacy of users’ financial information. The backend handles sensitive information securely and prevents unauthorized access.

Setup and Access Instructions:
Prerequisites:

Node.js installed
npm for managing dependencies
MongoDB Atlas account for database access
Frontend Setup:

Clone the Repository:
bash
Copy code
git clone https://github.com/Ajaybipul/Walmart.git
Navigate to the Project Directory:
bash
Copy code
cd Walmart
Install Dependencies:
bash
Copy code
npm install
Run the Application:
bash
Copy code
npm run dev
Backend Setup:

Set up the .env file with the following details:
makefile
Copy code
# MongoDB connection string
MONGO_URI=mongodb+srv://ajayyadavbipul2003:Ajay1224@walmart.v8i7g.mongodb.net/?retryWrites=true&w=majority&appName=walmart

# JWT secrets
JWT_SECRET=YourUniqueAndSecureJWTSecret
JWT_REFRESH_SECRET=YourUniqueAndSecureJWTRefreshSecret

# Braintree keys for payment
BRAINTREE_MERCHANT_ID=kyytk8m2dxd25zkk
BRAINTREE_PUBLIC_KEY=7t36y6qmq2bp78ns
BRAINTREE_PRIVATE_KEY=97d6deb9982364e25223f6162e658324
Run the Backend Server:
bash
Copy code
npm run server


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


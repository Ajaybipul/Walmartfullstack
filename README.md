### Walmart-Inspired E-Commerce Platform

**Description:**

This project is a full-stack e-commerce web application inspired by Walmart, designed to provide users with an intuitive and seamless shopping experience. It includes a range of features such as product browsing, cart management, user authentication, and secure payment processing. The platform is built using modern web development technologies, focusing on scalability, performance, and responsive design.

The frontend is developed using **React.js**, offering a modular component-based architecture, while **Redux Toolkit** manages global state efficiently for cart, authentication, and product data. **Tailwind CSS** and **Chakra UI** are used for styling, ensuring a clean, consistent, and responsive UI across various devices. The backend is powered by **Node.js** and **Express.js** for handling server-side logic, and **MongoDB** serves as the database for storing user, product, and order details. Secure authentication is implemented using **JWT (JSON Web Tokens)**, and **Braintree** along with **PayPal** are integrated to support multiple payment options.

The application allows users to browse through the product catalog without needing to log in, but actions such as adding items to the cart, viewing the wishlist, or placing an order require authentication. With features like a comprehensive product catalog, cart management, secure payments, and a registry page for custom collections, this project mimics a real-world e-commerce platform experience.

**Live Demo:** [Walmart-Inspired E-Commerce](https://relaxed-gumption-d49db8.netlify.app/)  
**Backend API:** [Backend API on Render](https://walmartfullstack-1.onrender.com/)

---

### Tech Stack:

- **React.js**: A JavaScript library for building user interfaces, enabling the creation of interactive and dynamic components.
- **Redux Toolkit**: A toolset for efficient state management, handling complex application states like cart items, user sessions, and product listings.
- **Tailwind CSS & Chakra UI**: Used for styling and designing responsive, accessible components, enhancing the UI and UX.
- **Node.js & Express.js**: For backend development, managing server-side operations, routing, and integrating with the MongoDB database.
- **MongoDB**: NoSQL database for managing product, user, cart, and registry data.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **Braintree & PayPal**: Integrated payment gateways, allowing secure and seamless transaction processing.
- **React Router**: For smooth navigation across pages and managing application routes.
- **React Icons**: Consistent and modern iconography across the application.
- **Git**: Version control for tracking changes and collaborating on the codebase.

---

### Key Features:

1. **Walmart-Inspired UI**:  
   The application follows a design inspired by Walmart’s clean and straightforward interface, offering users an intuitive navigation experience with a focus on usability and efficiency.

2. **User Authentication & Authorization**:  
   Secure user registration and login functionalities are implemented using JWT tokens. The authentication state is managed using Redux Toolkit and persisted in localStorage, ensuring that users remain logged in across different sessions.

3. **Cart & Wishlist Management**:  
   Users can add or remove items from their cart and wishlist. The cart state is managed with Redux, ensuring persistent storage of cart data even when the page is refreshed or closed.

4. **Search Functionality**:  
   An integrated search bar with category suggestions provides users with a convenient way to browse the product catalog. The search results are dynamically filtered based on the input.

5. **Secure Payment Gateway Integration**:  
   Payments are securely processed through Braintree and PayPal, offering multiple payment options such as credit/debit cards and PayPal.

6. **Product Browsing Without Authentication**:  
   Users can explore product categories and view product details without needing to log in. However, they must log in to add items to the cart or complete purchases.

7. **Order Management & Checkout**:  
   Users can place orders, view their order history, and manage their payment methods during checkout. Order summaries include details like products, quantities, and payment methods.

8. **Registry Page**:  
   The application supports a registry page where users can create, update, and delete custom registries. Other users can also view these registries.

9. **Responsive Design**:  
   The UI is fully responsive, built using Tailwind CSS’s utility classes and Chakra UI components, ensuring the application is accessible and functional across all devices, including desktops, tablets, and mobile phones.

---

### Setup Instructions:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Ajaybipul/Walmart.git
   cd Walmart
   ```

2. **Install Dependencies**:

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```
   
   For the backend:
   ```bash
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the `backend` directory and add the following variables:

   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   BRAINTREE_MERCHANT_ID=<your_braintree_merchant_id>
   BRAINTREE_PUBLIC_KEY=<your_braintree_public_key>
   BRAINTREE_PRIVATE_KEY=<your_braintree_private_key>
   ```

4. **Start the Backend Server**:

   Navigate to the `backend` directory and run:

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:5000`.

5. **Start the Frontend Development Server**:

   Navigate to the `frontend` directory and run:

   ```bash
   npm start
   ```

   This will start the React development server at `http://localhost:3000`.

6. **Access the Application**:

   Open your browser and go to `http://localhost:3000` to view the application.

---

### Challenges Faced:

1. **Complex State Management**:  
   Handling state for multiple features like cart, wishlist, and product data was a challenge. This was addressed using Redux Toolkit’s `createSlice` and `createAsyncThunk` methods, allowing for clean and modular state management.

2. **Authentication Handling**:  
   Implementing secure JWT-based authentication across multiple devices and ensuring smooth redirects for unauthenticated users was tricky. Proper state management and secure handling of tokens in Redux and localStorage helped overcome this.

3. **Cross-Origin Resource Sharing (CORS) Issues**:  
   During API calls, CORS errors were encountered. These were resolved by configuring CORS middleware in the Express backend, allowing requests from the frontend domain.

4. **Responsive Design**:  
   Creating a consistent and functional design across multiple devices, especially for complex elements like dropdowns and carousels, required careful planning and implementation using Tailwind CSS’s responsive utilities.

5. **Secure Payment Integration**:  
   Integrating Braintree and PayPal for payment processing involved handling sensitive payment information. Best practices for payment security were implemented to ensure smooth and secure transactions.

6. **API Error Handling**:  
   Proper error handling for backend APIs was essential to ensure a smooth user experience. Error messages were displayed to the user while logging the details in the backend for debugging.

---

### Best Practices Implemented:

1. **Modular Code Structure**:  
   The project follows a modular structure with separate folders for components, pages, Redux slices, and API services, making the codebase easy to navigate, maintain, and scale.

2. **JWT-Based Authentication**:  
   Authentication and sensitive operations are protected using JWT tokens. Access tokens are stored securely in localStorage, while refresh tokens ensure extended user sessions.

3. **Effective State Management**:  
   The use of Redux Toolkit for managing global state ensures a clear separation of concerns between the UI and business logic, resulting in better performance and maintainability.

4. **Consistent Styling Approach**:  
   Tailwind CSS and Chakra UI provide a cohesive and modern design language across all pages and components, enhancing UI consistency and reducing CSS bloat.

5. **API Error Handling**:  
   Both frontend and backend implement comprehensive error handling, providing meaningful error messages to users and logging errors in the backend for effective debugging.

6. **Secure Payment Integration**:  
   The integration of Braintree and PayPal follows industry best practices to handle user payment data securely, ensuring that transactions are processed safely and efficiently.

7. **Documentation & Comments**:  
   The codebase is well-documented, with comments explaining complex logic and workflows, ensuring that other developers can easily understand and contribute to the project.

---

### Key Learnings:

1. Enhanced understanding of **state management** using Redux Toolkit.
2. Improved skills in **backend development** with Express.js and MongoDB.
3. Gained experience in **secure payment integration** with Braintree and PayPal.
4. Refined techniques for **responsive design** using Tailwind CSS and Chakra UI.

---

**Author:**  
Ajay Yadav

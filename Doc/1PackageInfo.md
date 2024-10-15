
---

## PackageInfo.md

### 1. **Express**
   - **Description**: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications. It simplifies server-side development.
   - **Installation**: 
     ```bash
     npm install express
     ```

### 2. **Helmet**
   - **Description**: Helmet helps secure Express apps by setting various HTTP headers. It helps protect your app from some well-known web vulnerabilities by adjusting HTTP headers.
   - **Installation**: 
     ```bash
     npm install helmet
     ```

### 3. **HPP (HTTP Parameter Pollution)**
   - **Description**: Middleware to protect against HTTP Parameter Pollution attacks by filtering out repeated parameters.
   - **Installation**: 
     ```bash
     npm install hpp
     ```

### 4. **Body-Parser**
   - **Description**: Middleware for parsing incoming request bodies in a middleware before handling it. It's commonly used to parse JSON payloads.
   - **Installation**: 
     ```bash
     npm install body-parser
     ```

### 5. **Express-Rate-Limit**
   - **Description**: A middleware for Express that limits repeated requests to public APIs and endpoints. It helps prevent brute-force attacks.
   - **Installation**: 
     ```bash
     npm install express-rate-limit
     ```

### 6. **CORS (Cross-Origin Resource Sharing)**
   - **Description**: Middleware that allows or restricts requested resources on a web server depending on where the HTTP request was initiated. It enables secure cross-origin requests.
   - **Installation**: 
     ```bash
     npm install cors
     ```

### 7. **Mongoose**
   - **Description**: A MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose provides a straightforward, schema-based solution for modeling application data.
   - **Installation**: 
     ```bash
     npm install mongoose
     ```

### 8. **dotenv**
   - **Description**: A module that loads environment variables from a `.env` file into `process.env`, allowing secure management of sensitive configuration data.
   - **Installation**: 
     ```bash
     npm install dotenv
     ```

### 9. **JWT (JSON Web Token)**
   - **Description**: A standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authorization and authentication.
   - **Installation**: 
     ```bash
     npm install jsonwebtoken
     ```

### 10. **Multer**
   - **Description**: A middleware for handling `multipart/form-data`, primarily used for file uploads. It helps in storing files on the server or passing them for further processing.
   - **Installation**: 
     ```bash
     npm install multer
     ```

### 11. **Nodemailer**
   - **Description**: A module for Node.js applications to easily send emails. It supports secure transport using SMTP and allows integration for email verification and OTP functionality.
   - **Installation**: 
     ```bash
     npm install nodemailer
     ```

### 12. **Nodemon**
   - **Description**: A utility that automatically restarts your server when file changes in the directory are detected. It’s great for development to avoid manually restarting the server.
   - **Installation (as a dev dependency)**: 
     ```bash
     npm install nodemon --save-dev
     ```

### Additional Notes:
- **Start your server**: Add a script to `package.json` to use `nodemon` for development:
   ```json
   "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
   }
   ```
   Use `npm run dev` to start the server in development mode with automatic restarts.

---


```markdown
# DUHacks

Welcome to DUHacks - a web application designed to simplify the process of finding and managing pay and guest houses. Whether you're an owner looking to list accommodations or a student searching for the perfect place, DUHacks has you covered.

## Features

- **User Roles:**
  - Choose between being an owner or a student based on your requirements.

- **Add New Pay/Guest House:**
  - Owners can add details such as PG name, landmark, mobile number, etc., to list their accommodations.

- **Technology Stack:**
  - HTML, CSS, Node.js, Express.js, EJS, Bootstrap.

## Getting Started

To run DUHacks locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Hil-Patel/DUHacks.git
   cd DUHacks
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   node index.js
   ```
   or
   ```bash
   nodemon index.js
   ```

4. **Access the Application:**
   - Open your web browser and visit http://localhost:3000 to access the application.

## Project Structure

- **frontend**
  - **public** (all static files)
    - img
    - css file
    - index.html
  - **view** (all EJS files)
- .gitignore 
- index.js
- package.json
- package-lock.json

## Challenges Faced

- **Linking HTML and CSS Files:**
  The challenge encountered involved establishing the proper linkage between different HTML and CSS files and the HTTP requests when using the server created with Express.js.

- **Storing User and PG Details Without Database:**
  The challenge involved storing PG and user details. The solution utilized an array of objects in JavaScript, and this data was successfully passed to an EJS file.

## Contributions

Contributions are welcome! If you encounter any issues, have feature requests, or want to contribute to the project, feel free to open an issue or submit a pull request.
```

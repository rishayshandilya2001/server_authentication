Sure, here's a basic README.md for your project:

```markdown
# Simple User Authentication API

This is a simple Node.js API for user authentication with signup, login, and data retrieval features.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
node server.js
```

The server will start on port 3000.

## API Endpoints

### 1. Signup

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Description:** Allows users to sign up by providing a unique username and password.
- **Example Request:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword"
  }
  ```
- **Example Response:**
  - Success (200):
    ```
    user added
    ```
  - Error (400):
    ```
    username already exists
    ```

### 2. Login

- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Allows users to log in by providing their username and password.
- **Example Request:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword"
  }
  ```
- **Example Response:**
  - Success (200):
    ```
    user valid
    ```
  - Error (400):
    ```
    user invalid
    ```

### 3. Data Retrieval

- **Endpoint:** `/data`
- **Method:** `GET`
- **Description:** Retrieves all user data.
- **Example Response:**
  ```json
  [
    {
      "username": "john_doe",
      "password": "securepassword"
    },
    // Other user objects
  ]
  ```

## Error Handling

- 404 Not Found:
  ```
  404 Not Found
  ```

Feel free to customize and expand this README based on your project requirements.
```

Remember to update the file based on any additional features or modifications you make to your project.
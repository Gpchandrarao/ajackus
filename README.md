# User Management App

## Overview
This is a simple user management web application built with React.js. The application allows users to view, add, edit, and delete user details using JSONPlaceholder's `/users` endpoint as a mock backend API.

## Features
- Display a list of users with ID, Name, Email, and Department.
- Add new users.
- Edit existing users.
- Delete users.
- Error handling for API requests.
- Styled using Tailwind CSS.

## Technologies Used
- React.js
- Axios (for API requests)
- JSONPlaceholder API
- Tailwind CSS

## Installation

1. Clone the repository:
   ```sh
   git clone [(https://github.com/Gpchandrarao/ajackus.git)]
   ```
2. Navigate to the project folder:
   ```sh
   cd ajackus
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. You will see a list of users.
3. Use the form to add a new user.
4. Click the "Edit" button to modify a user's details.
5. Click the "Delete" button to remove a user.

## Tailwind CSS Classes Used
- `transition-all duration-500 ease-in-out` for smooth transitions.
- `bg-[#2baae2] hover:opacity-80 text-white font-bold py-2 px-4 rounded` for buttons.
- `border border-[#2baae2] rounded-lg p-2` for input fields.
- `table-auto w-full border-collapse` for tables.

## API Endpoints Used
- `GET https://jsonplaceholder.typicode.com/users` - Fetch users.
- `POST https://jsonplaceholder.typicode.com/users` - Add a user (mocked response).
- `PUT https://jsonplaceholder.typicode.com/users/{id}` - Edit a user.
- `DELETE https://jsonplaceholder.typicode.com/users/{id}` - Delete a user.

## License
This project is open-source and available under the MIT License.

## Author
- **G poornachandraraorao**
- GitHub: [(https://github.com/Gpchandrarao)]


# My Book Project

A web application that allows users to track the books they've read, including genres, personal ratings, and favorite status. This project showcases my skills in full-stack development, with a focus on creating a clean, responsive UI and a robust backend.
Update: 10/09/2024 backend and frontend separated into different repositories 
Link to Frontend: 
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Features
- Display a list of books with details like title, author, genre, and personal rating.
- Add new books to the list.
- Update existing book details.
- Delete books from the list.
- Mark books as personal favorites.
- Filter and sort books by different criteria.

## Technologies Used
- **Frontend**: 
  - **React**: For building the user interface.
  - **CSS**: For styling the application.
  - **Bootstrap** or **Tailwind CSS**: For responsive and modern UI design.
- **Backend**: 
  - **Node.js**: JavaScript runtime for server-side development.
  - **Express.js**: Web application framework for Node.js.
  - **PostgreSQL**: Relational database for storing book data. 
- **Testing**: 
  - **Jest**: For unit and integration testing.
  - **React Testing Library**: For testing React components.
  - **Supertest**: For HTTP assertions in the backend.
- **Deployment**: 
  - **Netlify** or **Vercel**: For hosting the frontend.
  - **Render** or **Railway**: For hosting the backend API.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/my-book-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd my-book-project
    ```
3. Install dependencies for both frontend and backend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

### Running the Application
1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```
2. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

## Usage

After starting the application, open your browser and go to `http://localhost:3000`. You'll see the main page where you can:
- View the list of books.
- Add a new book using the "Add Book" button.
- Edit book details by clicking the "Edit" button next to a book.
- Delete a book by clicking the "Delete" button.

## Testing

To run the tests, navigate to the project directory and use the following commands:

### Backend Tests
```bash
cd backend
npm test
Frontend Tests
bash
Copy code
cd frontend
npm test
```

## Project Structure

COMPLETE THIS BIT LATER


### Future Enhancements
- Implement user authentication for personalized book lists.
- Add book cover images to each entry.
- Integrate with external APIs for book information.
- Improve accessibility features.

## Contributing

Contributions are welcome! If you have suggestions or find a bug, please create an issue or submit a pull request.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.




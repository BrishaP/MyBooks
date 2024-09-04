ROUGH PLAN:

-Create a website that allows users to add to a database:
    -Book titles they have read
        -The genre
    -Add the books numerical rating out of 5
    -The date started in DD/MM/YY 
    -Is this book a Personal Favourite?

| Column Name | Data Type | Description                                  |
|-------------|-----------|----------------------------------------------|
| id          | Integer   | Primary key                                  |
| title       | Text      | Title of the book                            |
| author      | Text      | Author of the book                           |
| genre       | Text      | Genre of the book                            |
| rating      | Integer   | Personal rating (1 to 5)                     |
| start_date  | Date      | The date when you started reading the book   |
| end_date    | Date      | The date when you finished reading the book  |
| favorite    | Boolean   | Indicates if the book is a personal favorite |

# Project: My Book 

Planned using gitub issues 

## MVP 1: Display Book List (Read Operation)
- [ ] **Backend Setup**
  - [ ] Write a test for the `/books` endpoint to return a list of books.
  - [ ] Implement the `/books` endpoint in Express to return a list of books from the database.
  - [ ] Set up the database with a `books` table and seed it with initial data.
- [ ] **Frontend Setup**
  - [ ] Write a test to ensure the `BookList` component renders a list of books correctly.
  - [ ] Implement the `BookList` component that fetches data from the backend.
  - [ ] Style the book list using basic CSS.

## MVP 2: Add a Book (Create Operation)
- [ ] **Backend Setup**
  - [ ] Write a test for the `/books` POST endpoint to add a new book.
  - [ ] Implement the `/books` POST endpoint to add a new book to the database.
- [ ] **Frontend Setup**
  - [ ] Write a test to ensure the `AddBookForm` component submits the form and adds a new book.
  - [ ] Implement the `AddBookForm` component for users to input and submit book details.
  - [ ] Update the book list automatically upon form submission.

## MVP 3: Update Book Details (Update Operation)
- [ ] **Backend Setup**
  - [ ] Write a test for the `/books/:id` PUT endpoint to update a book's details.
  - [ ] Implement the `/books/:id` PUT endpoint to update the book details in the database.
- [ ] **Frontend Setup**
  - [ ] Write a test to ensure the `EditBookForm` component submits the form and updates a book.
  - [ ] Implement the `EditBookForm` component to allow users to update book details.
  - [ ] Update the book list to reflect the changes after editing.

## MVP 4: Delete a Book (Delete Operation)
- [ ] **Backend Setup**
  - [ ] Write a test for the `/books/:id` DELETE endpoint to remove a book from the database.
  - [ ] Implement the `/books/:id` DELETE endpoint to delete a book from the database.
- [ ] **Frontend Setup**
  - [ ] Write a test to ensure the `BookList` component correctly removes a book when the delete button is clicked.
  - [ ] Add a delete button to each book entry in the `BookList` component.
  - [ ] Update the book list after a book is deleted.

## MVP 5: Finalize the Project
- [ ] **Enhance User Interface (UI)**
  - [ ] Write tests to ensure the application renders properly across different screen sizes and browsers.
  - [ ] Improve the UI design using a CSS framework like Bootstrap or Tailwind CSS.
  - [ ] Ensure the application is responsive on various devices.
- [ ] **Add Filters and Sorting**
  - [ ] Write tests for filtering and sorting functionality in the `BookList` component.
  - [ ] Implement filtering options by genre, rating, or favorite status.
  - [ ] Implement sorting options (e.g., by title, author, rating).
- [ ] **Implement Authentication (Optional)**
  - [ ] Write tests to ensure that users can register, log in, and log out securely.
  - [ ] Implement user authentication using JWT or another method.
  - [ ] Restrict adding, editing, and deleting books to authenticated users only.
- [ ] **Deploy the Application**
  - [ ] Ensure all tests pass in a production-like environment.
  - [ ] Deploy the backend to a platform like Heroku or Railway.
  - [ ] Deploy the frontend to Netlify or Vercel.
  - [ ] Set up continuous integration/continuous deployment (CI/CD) for automated testing and deployment.
- [ ] **Documentation and README**
  - [ ] Update the `README.md` with instructions on setting up, running, and testing the application.
  - [ ] Include screenshots, code snippets, and explanations of the technologies used.



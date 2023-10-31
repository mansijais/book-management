# Book Management RESTful API

This project is a RESTful API for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book data.

## API Endpoints and Usage

### Create/Add a New Book

- **Endpoint**: `POST /api/books/add`
- **Usage**: Add a new book to the database.
- **Request Body**: Send a JSON object with the book details, including `title`, `author`, and `summary`.

Example:
 json (body)
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A novel depicting the lavish lifestyle and moral decay of the wealthy during the Roaring Twenties."
}

### View All Books
Endpoint: GET /api/books/
Usage: Retrieve a list of all books in the database.

### View a Specific Book
Endpoint: GET /api/books/{book_id}
Usage: Retrieve details of a specific book by its unique ID.

### Update a Book
Endpoint: PUT /api/books/{book_id}
Usage: Update the details of a specific book.
Request Body: Send a JSON object with the updated book details.

Example:
json(body)
{
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated Summary."
}

### Delete a Book
Endpoint: DELETE /api/books/{book_id}
Usage: Delete a specific book by its unique ID.

## Instructions to set up and run the application locally

### Clone the repository:

In bash-
git clone https://github.com/your-username/book-management-api.git
cd book-management-api

### Install the required dependencies:

In bash-
npm install

###   Configure the MongoDB connection:

Make sure you have a MongoDB instance running.
Update the MongoDB connection string in config/db.js to point to your MongoDB server.

### Start the Node.js server:

In bash-
node app.js

### The API will be accessible at http://localhost:3000. You can now use a tool like Postman or ThunderClient to test the endpoints.

### During the development process, the following decisions and assumptions were made:

- The application uses Express.js for routing and MongoDB for data storage.
- The book model includes fields for title, author, and summary.
- Routes for handling CRUD operations were created as specified.
- Error handling is implemented to provide meaningful error responses.
- MongoDB is used as the database, and the connection is configured in /book/config.js.
- Basic validation of request data is in place.

To get all books returned:
http://localhost:4000/Books
http://localhost:4000/books (not case sensitive? interesting)

To get books from uuuid:
http://localhost:4000/books/3
(the number after books is the id)

To get books from title:
For the example:
[
    {
        "id": 5,
        "title": "Book 3",
        "author": "Author 3",
        "genre": "Genre 3",
        "rating": 3,
        "start_date": "2023-03-01T00:00:00.000Z",
        "end_date": "2023-03-10T00:00:00.000Z",
        "favorite": true
    }
]
http://localhost:4000/books/title/Book%203
The reason you need to include %20 in the URL instead of %1 is due to URL encoding standards. In URLs, spaces are not allowed and must be encoded. The correct encoding for a space character is %20.

URL Encoding
Space Character: The space character ( ) is encoded as %20.
Other Characters: Other special characters also have specific encodings.
Example
For the book titled "Book 1":

Correct URL: http://localhost:4000/books/title/Book%201
Incorrect URL: http://localhost:4000/books/title/Book%1
Explanation
%20: This is the URL-encoded representation of a space character.
%1: This is not a valid URL encoding for a space or any other character. It would be interpreted incorrectly by the server.
Summary
When you are searching for a book titled "Book 1", you should use the URL:

This ensures that the space in "Book 1" is correctly encoded and understood by the server.

To get books from author:
http://localhost:4000/books/author/Author%203
for the example: (author: Author 3)
[
    {
        "id": 5,
        "title": "Book 3",
        "author": "Author 3",
        "genre": "Genre 3",
        "rating": 3,
        "start_date": "2023-03-01T00:00:00.000Z",
        "end_date": "2023-03-10T00:00:00.000Z",
        "favorite": true
    }
]

To get books from genre:
http://localhost:4000/books/genre/Genre%202

for the example: (Genre 2)
[
    {
        "id": 4,
        "title": "Book 2",
        "author": "Author 2",
        "genre": "Genre 2",
        "rating": 5,
        "start_date": "2023-02-01T00:00:00.000Z",
        "end_date": "2023-02-10T00:00:00.000Z",
        "favorite": false
    }
]

To get books from rating:
http://localhost:4000/books/rating/4
for the example: 4
[
    {
        "id": 3,
        "title": "Book 1",
        "author": "Author 1",
        "genre": "Genre 1",
        "rating": 4,
        "start_date": "2023-01-01T00:00:00.000Z",
        "end_date": "2023-01-10T00:00:00.000Z",
        "favorite": true
    }
]

To get books by end date:
http://localhost:4000/end_date/2023-03-10T00:00:00.000Z

for the example:
[
    {
        "id": 5,
        "title": "Book 3",
        "author": "Author 3",
        "genre": "Genre 3",
        "rating": 3,
        "start_date": "2023-03-01T00:00:00.000Z",
        "end_date": "2023-03-10T00:00:00.000Z",
        "favorite": true
    }
]

To get books by start date:
http://localhost:4000/books/start_date/2023-01-01T00:00:00.000Z
For the example:
  {
        "id": 3,
        "title": "Book 1",
        "author": "Author 1",
        "genre": "Genre 1",
        "rating": 4,
        "start_date": "2023-01-01T00:00:00.000Z",
        "end_date": "2023-01-10T00:00:00.000Z",
        "favorite": true
    }

To get books by favourite status:

To get books by favourite status:
AMERICAN SPELLING SORRY!!!
http://localhost:4000/books/favorite/true

For the example:
[
    {
        "id": 3,
        "title": "Book 1",
        "author": "Author 1",
        "genre": "Genre 1",
        "rating": 4,
        "start_date": "2023-01-01T00:00:00.000Z",
        "end_date": "2023-01-10T00:00:00.000Z",
        "favorite": true
    },
    {
        "id": 5,
        "title": "Book 3",
        "author": "Author 3",
        "genre": "Genre 3",
        "rating": 3,
        "start_date": "2023-03-01T00:00:00.000Z",
        "end_date": "2023-03-10T00:00:00.000Z",
        "favorite": true
    }
]

Post requests using postman:
To make a POST request using Postman, follow these steps:

Steps to Make a POST Request in Postman
Open Postman.
Select POST method from the dropdown menu next to the URL field.
Enter the URL for your endpoint:
Replace localhost:4000/books with your server's address and port if different.
Go to the Body tab.
Select raw and then choose JSON from the dropdown menu.
Enter the JSON data for the book you want to add. For example:
Click the Send button to make the request.
Example JSON Data
Here is an example of the JSON data you might send in the body of the POST request:

{
  "title": "Book 2",
  "author": "Author 2",
  "genre": "Genre 2",
  "rating": 5,
  "start_date": "2023-02-01T00:00:00.000Z",
  "end_date": "2023-02-10T00:00:00.000Z",
  "favorite": false
}

{
  "title": "The Poppy War",
  "author": "Kuang R.F",
  "genre": "Fantasy",
  "rating": 5,
  "start_date": "2023-01-21T00:00:00.000Z",
  "end_date": "2023-01-22T00:00:00.000Z",
  "favorite": true
}

The start_date and end_date are in the ISO 8601 format, which is a standardized way to represent date and time. The format is:

YYYY-MM-DDTHH:MM:SS.SSSZ

Breakdown of the Format
YYYY: Four-digit year (e.g., 2023)
MM: Two-digit month (e.g., 02 for February)
DD: Two-digit day of the month (e.g., 01)
T: Separator indicating the start of the time component
HH: Two-digit hour in 24-hour format (e.g., 00 for midnight)
MM: Two-digit minute (e.g., 00)
SS: Two-digit second (e.g., 00)
.SSS: Milliseconds (e.g., 000)
Z: Indicates that the time is in UTC (Coordinated Universal Time)
Example
start_date: "2023-02-01T00:00:00.000Z"
Represents February 1, 2023, at midnight in UTC.
end_date: "2023-02-10T00:00:00.000Z"
Represents February 10, 2023, at midnight in UTC.
This format is widely used in APIs and databases to ensure consistency and avoid ambiguity in date and time representation.

To delete books by id:
(make sure you are making a delete request lol)
http://localhost:4000/books/id/7
for the example:
{
  "title": "The Poppy War",
  "author": "Kuang R.F",
  "genre": "Fantasy",
  "rating": 5,
  "start_date": "2023-01-21T00:00:00.000Z",
  "end_date": "2023-01-22T00:00:00.000Z",
  "favorite": true
}


To delete books by title:
http://localhost:4000/books/title/The%20Poppy%20War

for the following example:
{
  "title": "The Poppy War",
  "author": "Kuang R.F",
  "genre": "Fantasy",
  "rating": 5,
  "start_date": "2023-01-21T00:00:00.000Z",
  "end_date": "2023-01-22T00:00:00.000Z",
  "favorite": true
}

I will deal with updating for my next MVP
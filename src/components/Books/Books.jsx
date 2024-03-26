import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold text-center mb-10">Books</h1>
      </div>
      <div className="sm:grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-4">
        {books.map((book) => (
          <Book key={book.title} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

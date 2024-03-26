import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBookTitle = getStoredReadBooks();
    if (books.length > 0) {
      const booksRead = [];
      for (const title of storedBookTitle) {
        const book = books.find((book) => book.title === title);
        if (book) {
          booksRead.push(book);
        }
      }
      setReadBooks(booksRead);
    }
  }, []);
  return (
    <div>
      <h1>book read: {readBooks.length}</h1>
      <ul>
        {readBooks.map((book) => (
          <li key={book.title}>
            <span>{book.iden}</span>
            <img src={book.img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListedBooks;

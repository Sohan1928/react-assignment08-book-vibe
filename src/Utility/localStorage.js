const getStoredReadBooks = () => {
  const storedBooksRead = localStorage.getItem("book-read");
  if (storedBooksRead) {
    return JSON.parse(storedBooksRead);
  }
  return [];
};

const saveBooksRead = (title) => {
  const storedBooksRead = getStoredReadBooks();
  const exists = storedBooksRead.find((bookTitle) => bookTitle === title);
  if (!exists) {
    storedBooksRead.push(title);
    localStorage.setItem("book-read", JSON.stringify(storedBooksRead));
  }
};

export { getStoredReadBooks, saveBooksRead };

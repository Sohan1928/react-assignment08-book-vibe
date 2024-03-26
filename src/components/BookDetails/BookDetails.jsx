import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { title } = useParams();
  const book = books.find((book) => book.title === title);
  console.log(book);

  return (
    <div>
      <div className="flex max-w-5xl mx-auto my-10 gap-8">
        <div className="bg-[#F3F3F3] mx-auto p-10 items-center justify-center text-center rounded-lg">
          <img className="w-96" src={book.img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-4">{book.title}</h1>
          <span className="font-medium ">By: {book.by_name}</span>
          <hr />
          <h4 className="font-medium pt-4">{book.position}</h4>
          <hr />
          <p className="">
            <span className="font-medium">Review:</span>
            {book.books_description}
          </p>
          <h4 className="font-medium space-x-5">
            Tag:
            <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-full px-3 ml-5">
              {book.adult}
            </span>{" "}
            <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-full px-3">
              {book.iden}
            </span>
          </h4>
          <hr />
          <h3 className="font-medium">
            Number of Pages: <span className="ml-5">{book.book_page}</span>
          </h3>
          <h3 className="font-medium">
            Publisher: <span className="ml-16">{book.publisher}</span>
          </h3>
          <h3 className="font-medium">
            Year of Publishing: {book.year_publish}
          </h3>
          <span className="font-medium">Rating: {book.ratings}</span>
          <div className="space-x-5">
            <button className="bg-[#59C6D2] px-5 py-2 rounded-md">Read</button>
            <button className="bg-[#59C6D2] px-5 py-2 rounded-md">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

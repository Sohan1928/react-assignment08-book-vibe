import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { img, adult, iden, title, by_name, position, ratings } = book;

  return (
    <div className="border border-gray-200 rounded-lg ">
      <figure>
        <img
          className="mx-auto bg-[#F3F3F3] px-16 py-5 mt-3 rounded-lg"
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="flex gap-10">
          <span className="font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-full px-3">
            {adult}
          </span>
          <div className="font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-full px-3">
            {iden}
          </div>
        </h2>
        <h1 className="text-xl font-bold py-3">{title}</h1>
        <span className="font-medium">By: {by_name}</span>
        <hr />
        <div className="flex justify-between">
          <div className="">{position}</div>
          <div className="flex items-center gap-3">
            {ratings} <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

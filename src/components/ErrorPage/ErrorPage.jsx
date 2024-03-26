import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="justify-center text-center items-center">
      <h1 className="text-red-600 font-bold text-2xl">Oops...!!</h1>
      <Link to="/">
        <h1 className="px-4 py-2 rounded-md text-[#23BE0A] text-3xl font-bold">
          Go Back To Home
        </h1>
      </Link>
    </div>
  );
};

export default ErrorPage;

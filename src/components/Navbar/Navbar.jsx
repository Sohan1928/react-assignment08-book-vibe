import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-10">
      <div className="flex justify-around">
        <h1 className="text-xl font-bold">Book Vibe</h1>
        <div>
          <ul className="flex space-x-5">
            <li className="font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <h1 className="font-medium">
              <NavLink to="/listedBooks">Listed Books</NavLink>
            </h1>
            <li className="font-medium">
              <NavLink to="/pagesToRead">Pages to Road</NavLink>
            </li>
          </ul>
        </div>
        <div className="space-x-3">
          <button className="bg-[#23BE0A] px-4 py-2 rounded-md text-white font-semibold">
            Sign In
          </button>
          <button className="bg-[#59C6D2] px-4 py-2 rounded-md text-white font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

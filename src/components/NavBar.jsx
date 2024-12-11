import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#121212] via-[#333333] to-[#9e9e9e] text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/">Eventify✨</Link>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/create-event" className="hover:underline">
            Create Event
          </Link>
          <Link to="/SignUP" className="hover:underline">
            Sign Up / Sign In
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

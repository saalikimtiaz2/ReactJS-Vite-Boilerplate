import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col text-center">
      <p>
        <span className="block text-[32px] font-semibold">Vite (REACT) 🚀</span>
        with Eslint(Airbnb Styles) and Tailwind.
      </p>
      <Link to="/about">
        <Button className="px-6 py-2 border border-primary text-primary mt-4 rounded hover:bg-primary hover:text-white transition-all duration-300">
          Change Page
        </Button>
      </Link>
    </div>
  );
}

export default Home;

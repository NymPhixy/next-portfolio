import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 absolute bottom-0 w-full">
      <p>
        &copy; {new Date().getFullYear()} Ruben Janssen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

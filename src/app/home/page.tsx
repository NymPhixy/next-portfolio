import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

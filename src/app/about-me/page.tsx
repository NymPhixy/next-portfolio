import React from "react";
import Link from "next/link";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Hello! I&apos;m Ruben Janssen, a passionate software developer...</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

export default AboutMe;

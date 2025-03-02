import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach me at: ruben@example.com</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}

export default Contact;

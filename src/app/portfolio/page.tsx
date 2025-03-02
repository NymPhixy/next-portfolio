import React from "react";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";

function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Link href="/">Go back to Home</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="Project 1"
          description="Details about Project 1..."
          link="/portfolio/item1"
        />
        <ProjectCard
          title="Project 2"
          description="Details about Project 2..."
          link="/portfolio/item2"
        />
      </div>
    </div>
  );
}

export default Portfolio;

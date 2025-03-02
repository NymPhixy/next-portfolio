import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-2xl mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link href={link} as={link} className="text-blue-500">
        View Project
      </Link>
    </div>
  );
}

export default ProjectCard;

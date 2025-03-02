"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const portfolioItems: {
  [key: string]: { title: string; description: string };
} = {
  item1: {
    title: "Project 1",
    description: "Details about Project 1...",
  },
  item2: {
    title: "Project 2",
    description: "Details about Project 2...",
  },
};

function PortfolioItem() {
  const { id } = useParams();
  const item = typeof id === "string" ? portfolioItems[id] : undefined;

  if (!item) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <Link href="/portfolio">Back to Portfolio</Link>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default PortfolioItem;

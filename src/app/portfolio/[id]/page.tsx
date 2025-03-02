"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const portfolioItems: {
  [key: string]: {
    title: string;
    description: string;
    content?: { type: string; value: string }[];
  };
} = {
  item1: {
    title: "Project 1",
    description: "Details about Project 1...",
    content: [
      {
        type: "text",
        value: "We zijn dit project begonnen....",
      },
      {
        type: "text",
        value: "Daarna hebben we dit gedaan....",
      },
    ],
  },
  item2: {
    title: "Project 2",
    description: "Details about Project 2...",
  },
};

function PortfolioItem() {
  const params = useParams();
  const id = params?.id as string;
  const item = portfolioItems[id];

  if (!item) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <Link href="/portfolio">Back to Portfolio</Link>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div className="flex flex-col gap-16">
        {item.content &&
          item.content.map((contentItem, index) => (
            <div className="" key={index}>
              {contentItem.type === "text" && (
                <p className="text-leading">{contentItem.value}</p>
              )}
              {contentItem.type === "image" && (
                <img src={contentItem.value} alt="" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PortfolioItem;

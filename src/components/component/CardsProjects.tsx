"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CardsProjects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        style={{
          backgroundColor: "var(--background)",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="https://www.futuro.cl/wp-content/uploads/2023/11/charly-garcia-1983-web-768x432.webp"
          alt="Project 1"
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          priority
        />
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button
              variant="link"
              size="sm"
              style={{ backgroundColor: "green", color: "white" }}
            >
              React
            </Button>
            <Button
              variant="link"
              size="sm"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Tailwind CSS
            </Button>
            <Button
              variant="link"
              size="sm"
              style={{ backgroundColor: "green", color: "white" }}
            >
              TypeScript
            </Button>
          </div>
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p className="text-muted-foreground mb-4">
            A modern and responsive web application built with the latest
            technologies.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Ver proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CardsProjects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://www.futuro.cl/wp-content/uploads/2023/11/charly-garcia-1983-web-768x432.webp"
          alt="Project 1"
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button variant="link" size="sm">
              React
            </Button>
            <Button variant="link" size="sm">
              Tailwind CSS
            </Button>
            <Button variant="link" size="sm">
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
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://www.futuro.cl/wp-content/uploads/2023/11/charly-garcia-1983-web-768x432.webp"
          alt="Project 2"
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button variant="link" size="sm">
              Next.js
            </Button>
            <Button variant="link" size="sm">
              Prisma
            </Button>
            <Button variant="link" size="sm">
              PostgreSQL
            </Button>
          </div>
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p className="text-muted-foreground mb-4">
            A full-stack web application with a modern and intuitive user
            interface.
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
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://www.futuro.cl/wp-content/uploads/2023/11/charly-garcia-1983-web-768x432.webp"
          alt="Project 3"
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button variant="link" size="sm">
              Vue.js
            </Button>
            <Button variant="link" size="sm">
              Vuex
            </Button>
            <Button variant="link" size="sm">
              Firebase
            </Button>
          </div>
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p className="text-muted-foreground mb-4">
            A feature-rich web application with a focus on performance and user
            experience.
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

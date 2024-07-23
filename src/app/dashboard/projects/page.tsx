import { CardsProjects } from "@/components/component/CardsProjects";

export default function Projects() {
  return (
    <>
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <p className="text-muted-foreground mt-3 mb-10">
          Estos son mis proyectos mas destacados.
        </p>
      </main>

      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <CardsProjects />
      </main>
    </>
  );
}

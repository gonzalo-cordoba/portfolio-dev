import { CardsProjects } from "@/components/component/CardsProjects";

export default function Projects() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <p className="text-muted-foreground mt-3 mb-10">
          Estos son mis proyectos mas destacados.
        </p>
      </div>

      <main>
        <CardsProjects />
      </main>
    </>
  );
}

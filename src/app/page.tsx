import { CardsProjects } from "@/components/component/CardsProjects";
import "./globals.css";
import { CardHome } from "@/components/component/card-home";

export default function Home() {
  return (
    <>
      <main className="mt-7">
        <CardHome />
      </main>

      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl mb-10">
        <h1 className="text-2xl font-bold mb-5">
          Mis proyectos más destacados:
        </h1>
        <CardsProjects />
      </main>
    </>
  );
}

import { SkillsCard } from "@/components/component/skills-card";
import { Timeline } from "@/components/component/timeline";

export default function Resume() {
  return (
    <>
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <h1 className="text-2xl font-bold mt-3 ml-3">Perfil</h1>
        <p className="text-muted-foreground mt-3 ml-3">
          Soy un desarrollador full-stack. Con un fuerte enfoque en el
          desarrollo frontend, me encanta crear interfaces de usuario
          impresionantes e intuitivas.
        </p>
      </main>

      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <h3 className="text-2xl font-bold mt-3 ml-3">Experiencia</h3>
        <Timeline />
      </main>

      <main className="flex justify-center items-center bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <SkillsCard />
      </main>
    </>
  );
}

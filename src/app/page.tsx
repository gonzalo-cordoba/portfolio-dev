import { ButtonSecondary } from "@/components/component/button-secondary";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-center pt-0 min-h-screen bg-gray-100">
        <img
          className="flex justify-center w-20 h-20 rounded-full mr-4"
          src="https://github.com/shadcn.png"
          alt="Gonzalo Cordoba"
        />
        <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-lg mx-4">
          <h1 className="text-3xl font-bold mb-2">Hola!👋</h1>
          <h2 className="text-2xl font-semibold mb-2">
            Mi nombre es Gonzalo Cordoba
          </h2>
          <h3 className="text-xl font-medium mb-4">Desarrollador Front-end</h3>
          <p className="text-base mb-4">
            Soy un desarrollador full stack con un fuerte enfoque en el
            desarrollo frontend. Me encanta crear interfaces de usuario
            impresionantes e intuitivas.
          </p>
          <ButtonSecondary />
        </div>
      </div>
    </>
  );
}

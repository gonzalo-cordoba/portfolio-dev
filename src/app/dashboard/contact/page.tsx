import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <h1 className="text-2xl font-bold">Contáctame</h1>
        <p className="text-muted-foreground mt-3 mb-10">
          Si está interesado en mis servicios, complete este formulario para que
          podamos coordinar una reunión.
        </p>
      </main>
      <div className="flex justify-center items-center bg-gray-100 mt-10 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
          <form action="https://formspree.io/f/xpwaqloq" method="POST">
            {/* Nombre */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Ingrese su nombre"
                required
                className="mt-1 block w-full"
              />
            </div>

            {/* E-mail */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su e-mail"
                required
                className="mt-1 block w-full"
              />
            </div>

            {/* Mensaje */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Ingrese su mensaje"
                required
                className="mt-1 block w-full"
              />
            </div>

            {/* Botón de Enviar */}
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </div>
    </>
  );
}

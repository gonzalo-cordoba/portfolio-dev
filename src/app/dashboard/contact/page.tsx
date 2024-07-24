"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return setAlert({
        type: "error",
        message: "Por favor, complete todos los campos del formulario.",
      });
    }

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch("https://formspree.io/f/xpwaqloq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario.");
      }

      setAlert({
        type: "success",
        message: "El formulario se envió correctamente",
      });
      setName("");
      setEmail("");
      setMessage("");
      form.reset();
    } catch (error) {
      setAlert({
        type: "error",
        message:
          "Ha ocurrido un error al enviar el formulario. Inténtelo más tarde.",
      });
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>

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
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>

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
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>

            <Button type="submit">Enviar</Button>
          </form>

          {alert && (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>
                {alert.type === "success" ? "¡Excelente!" : "Error"}
              </AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </>
  );
}

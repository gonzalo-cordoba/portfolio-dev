"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2).max(20),
  email: z.string().email(),
});

export default function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
  }

  return (
    <>
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <h1 className="text-2xl font-bold">Contactáme</h1>
        <p className="text-muted-foreground mt-3 mb-10">
          Si está interesado en mis servicios, no dude en completar este
          formulario. Estaré encantado de ponerme en contacto con usted para
          discutir sus necesidades específicas y agendar una reunión en la que
          podamos explorar cómo puedo ayudarle a desarrollar su proyecto manera
          efectiva.
        </p>
      </main>
      <div className="flex justify-center items-center bg-gray-100 mt-10 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              {/* Nombre */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingrese su nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* E-mail */}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Textarea */}
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">Escribe tu mensaje</Label>
                <Textarea placeholder="Mensaje" id="message-2" />
                <p className="text-sm text-muted-foreground">
                  Su mensaje será respondido a la brevedad vía email.
                </p>
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

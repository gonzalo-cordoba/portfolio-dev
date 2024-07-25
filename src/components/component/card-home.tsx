import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CardHome() {
  return (
    <Card className="flex items-center gap-6 p-6 mt-16 mb-16">
      <div className="flex-shrink-0">
        <Avatar className="h-28 w-28">
          <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQES7mIbBslr5A/profile-displayphoto-shrink_800_800/0/1626736649555?e=1727308800&v=beta&t=MiPxMsRclk8Xb_y6WvcdZvlxK6qk5pipt0DVLToenEc" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
      </div>
      <main className="space-y-2 bg-white p-8 rounded-lg shadow-md w-full max-w-10xl">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            Hola! 👋, Mi nombre es Gonzalo Cordoba
          </h1>
        </div>
        <p className="text-muted-foreground font-bold">
          Desarrollador Front-end
        </p>
        <p className="text-muted-foreground">
          Soy un desarrollador full stack. Con un fuerte enfoque en el
          desarrollo frontend, me encanta crear interfaces de usuario
          impresionantes e intuitivas.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Contáctame
        </Link>
      </main>
    </Card>
  );
}

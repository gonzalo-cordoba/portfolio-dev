import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function CardHome() {
  return (
    <Card className="flex items-center gap-6 p-6">
      <div className="flex-shrink-0">
        <Avatar className="h-28 w-28">
          <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQES7mIbBslr5A/profile-displayphoto-shrink_800_800/0/1626736649555?e=1727308800&v=beta&t=MiPxMsRclk8Xb_y6WvcdZvlxK6qk5pipt0DVLToenEc" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            Hola! 👋, Mi nombre es Gonzalo Cordoba
          </h1>
        </div>
        <p className="text-muted-foreground">Desarrollador Front-end</p>
        <p className="text-muted-foreground">
          Soy un desarrollador full stack. Con un fuerte enfoque en el
          desarrollo frontend, me encanta crear interfaces de usuario
          impresionantes e intuitivas.
        </p>
        <Button variant="link">Contáctame</Button>
      </div>
    </Card>
  );
}

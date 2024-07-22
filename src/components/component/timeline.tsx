export function Timeline() {
  return (
    <div className="p-6 sm:p-10">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">
            Enero 2022 - Presente | Desarrollador Front-end, Acme Inc.
          </div>
          <div className="text-muted-foreground">
            Responsable del desarrollo y mantenimiento de la interfaz de usuario
            de la aplicación web de Acme Inc. Implementé una nueva arquitectura
            basada en componentes reutilizables, mejorando la escalabilidad y
            mantenibilidad del código. Lideré la migración a una nueva
            biblioteca de UI, reduciendo el tiempo de carga de la página en un
            30%.
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">
            Julio 2019 - Diciembre 2021 | Desarrollador Front-end, XYZ Corp.
          </div>
          <div className="text-muted-foreground">
            Desarrollé y mantuve la interfaz de usuario de la plataforma web de
            XYZ Corp. Implementé mejoras de accesibilidad y optimicé el
            rendimiento de la aplicación, reduciendo el tiempo de carga en un
            20%. Participé en el diseño y la implementación de nuevas
            funcionalidades, trabajando en estrecha colaboración con el equipo
            de diseño y el equipo de back-end.
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
          <div className="font-medium">
            Marzo 2017 - Junio 2019 | Desarrollador Front-end, ABC Solutions
          </div>
          <div className="text-muted-foreground">
            Responsable del desarrollo y mantenimiento de la interfaz de usuario
            de varios proyectos web para clientes de ABC Solutions. Implementé
            soluciones de diseño responsivo y mejoras de rendimiento, lo que
            resultó en una mejor experiencia de usuario. Participé en la
            capacitación y el mentoring de desarrolladores junior.
          </div>
        </div>
      </div>
    </div>
  );
}

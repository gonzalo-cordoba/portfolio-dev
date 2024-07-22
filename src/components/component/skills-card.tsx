import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BiLogoRedux } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export function SkillsCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Mis habilidades tecnológicas</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2">
            <FaReact className="w-8 h-8" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNextjsFill className="w-8 h-8" />
            <span className="text-sm font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTypescript className="w-8 h-8" />
            <span className="text-sm font-medium">TypeScript</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2">
            <IoLogoJavascript className="w-8 h-8" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt className="w-8 h-8" />
            <span className="text-sm font-medium">Git</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BiLogoRedux className="w-8 h-8" />
            <span className="text-sm font-medium">Redux</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2">
            <FaNode className="w-8 h-8" />
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DiCss3 className="w-8 h-8" />
            <span className="text-sm font-medium">CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaHtml5 className="w-8 h-8" />
            <span className="text-sm font-medium">HTML5</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

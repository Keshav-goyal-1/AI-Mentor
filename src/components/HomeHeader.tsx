
import { Code, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeHeader = () => {
  return (
    <header className="fixed w-full bg-codeblue-800/95 backdrop-blur-sm border-b border-codeblue-600 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-codecyan" />
          <span className="text-xl font-bold text-white">CodeMentor<span className="text-codecyan">AI</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#languages" className="text-codeblue-200 hover:text-codecyan transition-colors">Languages</a>
          <a href="#examples" className="text-codeblue-200 hover:text-codecyan transition-colors">Examples</a>
          <a href="#exercises" className="text-codeblue-200 hover:text-codecyan transition-colors">Exercises</a>
          <a href="#about" className="text-codeblue-200 hover:text-codecyan transition-colors">About</a>
        </nav>
        <div className="flex gap-3">
          <Button variant="outline" className="hidden md:flex gap-2 border-codecyan text-codecyan hover:bg-codecyan/20 hover:text-white">
            <BookOpen className="h-4 w-4" />
            <span>Resources</span>
          </Button>
          <Button className="bg-codecyan hover:bg-codecyan-light text-codeblue-900 gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;

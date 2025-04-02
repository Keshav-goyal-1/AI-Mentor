
import { Code, FileCode, FolderOpenDot, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const languages = [
  {
    name: "JavaScript",
    icon: <FileCode className="h-8 w-8 text-yellow-400" />,
    description: "Master the language of the web with dynamic, interactive lessons.",
    level: "Beginner to Advanced",
    topics: ["Variables", "Functions", "DOM", "Async/Await", "ES6+"]
  },
  {
    name: "Python",
    icon: <Code className="h-8 w-8 text-blue-400" />,
    description: "Learn the most beginner-friendly language with real-world applications.",
    level: "Beginner to Intermediate",
    topics: ["Data Types", "Functions", "OOP", "Libraries", "Web Scraping"]
  },
  {
    name: "HTML/CSS",
    icon: <FolderOpenDot className="h-8 w-8 text-orange-400" />,
    description: "Build beautiful, responsive websites from the ground up.",
    level: "All Levels",
    topics: ["Semantics", "Layouts", "Flexbox", "Grid", "Animations"]
  },
  {
    name: "Java",
    icon: <Terminal className="h-8 w-8 text-red-400" />,
    description: "Develop enterprise-grade applications with strong typing.",
    level: "Intermediate",
    topics: ["Classes", "OOP", "Collections", "Threads", "Spring"]
  }
];

const LanguageSection = () => {
  return (
    <section id="languages" className="py-20 bg-codeblue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Programming Languages</h2>
          <p className="text-codeblue-300 max-w-2xl mx-auto">
            Choose from a variety of programming languages to learn with personalized guidance from your AI coding mentor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <Card key={lang.name} className="bg-codeblue-700 border-codeblue-600 hover:border-codecyan transition-colors overflow-hidden group">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    {lang.icon}
                    <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                  </div>
                  <p className="text-codeblue-200 mb-4">{lang.description}</p>
                  <div className="mb-3">
                    <span className="text-xs text-codecyan">{lang.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lang.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-codeblue-600 text-codeblue-200 text-xs rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-codeblue-800 p-3 text-center border-t border-codeblue-600 group-hover:bg-codecyan/10 transition-colors">
                  <span className="text-codecyan font-medium">Start Learning &rarr;</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;

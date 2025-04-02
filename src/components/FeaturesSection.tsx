
import { MessageSquare, BookOpen, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-codecyan" />,
    title: "Interactive Learning",
    description: "Ask questions and get immediate explanations tailored to your understanding level."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-codecyan" />,
    title: "Practical Examples",
    description: "Learn from real-world code examples that illustrate programming concepts clearly."
  },
  {
    icon: <Code className="h-6 w-6 text-codecyan" />,
    title: "Coding Exercises",
    description: "Reinforce your knowledge with exercises that gradually increase in difficulty."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-codecyan" />,
    title: "AI Personalization",
    description: "Get a learning experience that adapts to your pace, preferences, and goals."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-codeblue-800 to-codeblue-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-codeblue-800/50 backdrop-blur-md border border-codeblue-700 p-6 rounded-lg hover:border-codecyan/30 transition-colors"
                >
                  <div className="bg-codeblue-700/50 p-2 rounded-md w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-codeblue-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How CodeMentor AI <br />Accelerates Your Learning</h2>
            <p className="text-codeblue-300 mb-6">
              Our AI-powered platform makes learning to code easier and more effective than traditional methods. 
              Get personalized assistance, practical examples, and targeted exercises that build your skills step by step.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-codecyan"></div>
                <p className="text-codeblue-200">Learn at your own pace, 24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-codecyan"></div>
                <p className="text-codeblue-200">Get immediate feedback on your code</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-codecyan"></div>
                <p className="text-codeblue-200">Track your progress with detailed insights</p>
              </div>
            </div>
            <Button className="mt-8 bg-codecyan hover:bg-codecyan-light text-codeblue-900">
              Explore All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

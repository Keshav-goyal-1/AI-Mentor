
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Hero = () => {
  const [typingText, setTypingText] = useState("JavaScript");
  
  useEffect(() => {
    const languages = ["JavaScript", "Python", "Java", "HTML/CSS", "TypeScript"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % languages.length;
      setTypingText(languages[currentIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-codeblue-900 to-codeblue-800 overflow-hidden">

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJoLTEyYTIgMiAwIDAgMS0yLTJ2LTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0">
            <p className="text-codecyan font-medium">AI CODING MENTOR</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Master <span className="typing-text inline-block animate-typing gradient-text">{typingText}</span> <br/>With Your AI Coding Assistant
            </h1>
            <p className="text-codeblue-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Learn to code through interactive examples and personalized exercises, 
              with guidance from an AI mentor that adapts to your learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button className="bg-codecyan hover:bg-codecyan-light text-codeblue-900 font-medium py-6 px-6 text-lg" >
                <Link to="/learning">
                Start Learning Now
                </Link>
              </button>
              <Button variant="outline" className="border-codeblue-300 text-white hover:bg-codeblue-700 py-6 px-6 text-lg">
                Explore Features
              </Button>
            </div>
            <div className="text-codeblue-300 flex items-center gap-3 justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-codeblue-600 border-2 border-codeblue-800"></div>
                <div className="w-8 h-8 rounded-full bg-codeblue-500 border-2 border-codeblue-800"></div>
                <div className="w-8 h-8 rounded-full bg-codeblue-400 border-2 border-codeblue-800"></div>
              </div>
              <span>Joined by 10,000+ learners</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-codeblue-700 rounded-lg border border-codeblue-600 shadow-xl p-4 md:ml-10 code-font">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-codeblue-300 text-xs ml-2">example.js</div>
              </div>
              <div className="space-y-2 text-sm md:text-base">
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">learnToCode</span><span className="text-white">()</span> <span className="text-white">{`{`}</span></p>
                <p className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-300">languages</span> <span className="text-white">=</span> <span className="text-yellow-300">[</span><span className="text-orange-300">'JavaScript'</span><span className="text-white">,</span> <span className="text-orange-300">'Python'</span><span className="text-white">,</span> <span className="text-orange-300">'Java'</span><span className="text-yellow-300">]</span><span className="text-white">;</span></p>
                <p className="pl-4"><span className="text-blue-400">const</span> <span className="text-green-300">mentor</span> <span className="text-white">=</span> <span className="text-blue-400">new</span> <span className="text-yellow-300">AI</span><span className="text-white">(</span><span className="text-orange-300">'CodeMentor'</span><span className="text-white">);</span></p>
                <p className="pl-4"><span className="text-green-300">languages</span><span className="text-white">.</span><span className="text-yellow-300">forEach</span><span className="text-white">((</span><span className="text-purple-400">lang</span><span className="text-white">) =`{'>'}`</span> <span className="text-white">{`{`}</span></p>
                <p className="pl-8"><span className="text-green-300">mentor</span><span className="text-white">.</span><span className="text-yellow-300">teach</span><span className="text-white">(</span><span className="text-purple-400">lang</span><span className="text-white">,</span> <span className="text-orange-300">'examples'</span><span className="text-white">,</span> <span className="text-orange-300">'exercises'</span><span className="text-white">);</span></p>
                <p className="pl-4"><span className="text-white">{`});`}</span></p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-orange-300">'Programming skills acquired!'</span><span className="text-white">;</span></p>
                <p><span className="text-white">{`}`}</span></p>
                <p className="text-codecyan">// Start your coding journey today!</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-codecyan/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

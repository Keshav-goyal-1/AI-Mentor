
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-codeblue-900 to-codeblue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-codeblue-300 text-lg mb-8 max-w-2xl mx-auto">
            Begin learning with your personal AI coding mentor today. Get instant access to examples, 
            exercises, and personalized guidance for any programming language.
          </p>
          <Button className="bg-codecyan hover:bg-codecyan-light text-codeblue-900 px-8 py-6 text-lg">
            <Link to="/learning">
            Start Learning Now  
            </Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-codeblue-400">No credit card required. Get started in seconds.</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

type MakerProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
};

const Maker = ({ name, role, bio, image, github, twitter, linkedin }: MakerProps) => {
  return (
    <Card className="bg-codeblue-700/50 border-codeblue-600 hover:border-codecyan/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 border-2 border-codecyan mb-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-codeblue-600 text-xl">{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-codecyan mb-4">{role}</p>
          <p className="text-codeblue-200 mb-6">{bio}</p>
          
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" 
                className="text-codeblue-300 hover:text-codecyan transition-colors">
                <Github className="h-5 w-5" />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" 
                className="text-codeblue-300 hover:text-codecyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" 
                className="text-codeblue-300 hover:text-codecyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-codeblue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-codeblue-300 text-lg max-w-2xl mx-auto">
            The brilliant minds behind CodeMentor AI, dedicated to helping you master coding through 
            interactive learning and personalized guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Maker 
            name="Keshav goyal"
            role="Lead Developer"
            bio="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/placeholder.svg"
            github="https://github.com/alexj"
            twitter="https://twitter.com/alexj"
            linkedin="https://linkedin.com/in/alexj"
          />
          
          <Maker 
            name="Ashwani Kumar"
            role="Frontend Developer"
            bio="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/placeholder.svg"
            github="https://github.com/sarahc"
            twitter="https://twitter.com/sarahc"
            linkedin="https://linkedin.com/in/sarahc"
          />
          
          <Maker 
            name="Aryan "
            role="UX Designer"
            bio="User experience specialist focused on creating intuitive interfaces that make learning to code a delightful experience."
            image="/placeholder.svg"
            github="https://github.com/michaelr"
            linkedin="https://linkedin.com/in/michaelr"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

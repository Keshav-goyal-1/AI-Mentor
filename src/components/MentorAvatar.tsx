
import React from 'react';
import { Bot } from 'lucide-react';

const MentorAvatar: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-mentor-dark flex items-center justify-center animate-pulse-glow border-2 border-mentor-light">
        <Bot className="w-10 h-10 text-mentor-light" />
      </div>
      <div className="absolute -bottom-1 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-mentor-dark"></div>
    </div>
  );
};

export default MentorAvatar;


import React from 'react';
import { cn } from '@/lib/utils';
import CodeBlock from './CodeBlock';
import { User, Bot } from 'lucide-react';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  codeBlocks?: { language: string; code: string }[];
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  className?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, className }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg message-fade-in",
        isBot ? "bg-secondary" : "bg-card",
        className
      )}
    >
      <div className="flex-shrink-0">
        {isBot ? (
          <div className="w-8 h-8 rounded-full bg-mentor flex items-center justify-center animate-pulse-glow">
            <Bot className="w-5 h-5 text-mentor-foreground" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-300" />
          </div>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <span className="font-medium">
            {isBot ? "AI Mentor" : "You"}
          </span>
          <span className="text-xs text-muted-foreground">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="space-y-2">
          <p className="text-foreground">{message.text}</p>
          {message.codeBlocks && message.codeBlocks.map((block, index) => (
            <CodeBlock 
              key={index} 
              language={block.language} 
              code={block.code} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

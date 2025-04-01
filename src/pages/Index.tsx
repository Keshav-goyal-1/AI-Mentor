
import React, { useState } from 'react';
import Header from '@/components/Header';
import ChatContainer from '@/components/ChatContainer';
import { Message } from '@/components/ChatMessage';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { generateAIResponse } from '@/utils/geminiService';

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Beginner');

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      type: 'user',
      text,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Generate AI response using our service
      const botResponse = await generateAIResponse(text, selectedLanguage, selectedDifficulty);
      setMessages((prev) => [...prev, botResponse]);
      
      // Show toast notification
      toast.success("New tip from AI Mentor", {
        description: "Keep asking questions to learn more!",
      });
    } catch (error) {
      console.error("Error handling message:", error);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
    
    if (messages.length > 0) {
      toast.info(`Switched to ${language}`, {
        description: "Your learning experience is now focused on this language.",
      });
    }
  };

  const handleSelectDifficulty = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    
    if (messages.length > 0) {
      toast.info(`Difficulty set to ${difficulty}`, {
        description: "Explanations will be adjusted to this level.",
      });
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header 
        selectedLanguage={selectedLanguage}
        selectedDifficulty={selectedDifficulty}
        onSelectLanguage={handleSelectLanguage}
        onSelectDifficulty={handleSelectDifficulty}
      />
      <main className="flex-1 overflow-hidden">
        <ChatContainer 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading}
          selectedLanguage={selectedLanguage}
        />
      </main>
    </div>
  );
};

export default Index;

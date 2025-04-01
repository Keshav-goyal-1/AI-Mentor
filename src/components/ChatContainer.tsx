
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { Message } from './ChatMessage';
import ChatInput from './ChatInput';
import ChatSuggestions from './ChatSuggestions';

interface ChatContainerProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  selectedLanguage: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ 
  messages, 
  onSendMessage, 
  isLoading,
  selectedLanguage
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 mb-6 rounded-full bg-mentor/20 flex items-center justify-center">
              <span className="text-mentor text-3xl">?</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Start Your Coding Journey</h2>
            <p className="text-muted-foreground max-w-md mb-6">
              Ask any coding question or select a suggestion below to begin learning.
            </p>
            <ChatSuggestions 
              onSelectSuggestion={onSendMessage}
              language={selectedLanguage}
            />
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </>
        )}
        {isLoading && (
          <div className="flex items-center space-x-2 bg-secondary p-4 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-mentor flex items-center justify-center animate-pulse">
              <span className="text-mentor-foreground text-sm">...</span>
            </div>
            <div className="text-muted-foreground">AI Mentor is thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-border">
        <ChatInput onSendMessage={onSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default ChatContainer;

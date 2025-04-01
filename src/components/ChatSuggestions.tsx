
import React from 'react';
import SuggestionChip from './SuggestionChip';

interface ChatSuggestionsProps {
  onSelectSuggestion: (suggestion: string) => void;
  language: string;
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ onSelectSuggestion, language }) => {
  const suggestions = getSuggestionsByLanguage(language);
  
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((suggestion, index) => (
        <SuggestionChip
          key={index}
          text={suggestion}
          onClick={onSelectSuggestion}
        />
      ))}
    </div>
  );
};

const getSuggestionsByLanguage = (language: string): string[] => {
  const commonSuggestions = [
    "Explain variables",
    "How to debug code?",
    "Best practices"
  ];
  
  const languageSuggestions: Record<string, string[]> = {
    "JavaScript": [
      "How to use async/await?",
      "Explain closures",
      "DOM manipulation"
    ],
    "Python": [
      "List comprehensions",
      "Working with dictionaries",
      "Virtual environments"
    ],
    "Java": [
      "Object-oriented concepts",
      "How to use interfaces?",
      "Java collections"
    ],
    "C++": [
      "Memory management",
      "Smart pointers",
      "STL containers"
    ],
    "HTML/CSS": [
      "Flexbox tutorial",
      "CSS Grid basics",
      "Responsive design"
    ],
    "React": [
      "Hooks overview",
      "State management",
      "Component lifecycle"
    ]
  };
  
  return [
    ...commonSuggestions,
    ...(languageSuggestions[language] || [])
  ];
};

export default ChatSuggestions;

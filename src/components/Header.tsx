
import React from 'react';
import MentorAvatar from './MentorAvatar';
import LanguageSelector from './LanguageSelector';
import DifficultySelector from './DifficultySelector';

interface HeaderProps {
  selectedLanguage: string;
  selectedDifficulty: string;
  onSelectLanguage: (language: string) => void;
  onSelectDifficulty: (difficulty: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedLanguage,
  selectedDifficulty,
  onSelectLanguage,
  onSelectDifficulty
}) => {
  return (
    <header className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <MentorAvatar />
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            <span className="text-mentor">Learnify</span> AI Mentor
          </h1>
          <p className="text-muted-foreground">Your personal coding assistant</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <LanguageSelector 
          selectedLanguage={selectedLanguage} 
          onSelectLanguage={onSelectLanguage} 
        />
        <DifficultySelector 
          selectedDifficulty={selectedDifficulty} 
          onSelectDifficulty={onSelectDifficulty} 
        />
      </div>
    </header>
  );
};

export default Header;

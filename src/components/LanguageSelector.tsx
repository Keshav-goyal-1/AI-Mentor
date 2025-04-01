
import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Python', icon: 'PY' },
  { name: 'Java', icon: 'JV' },
  { name: 'C++', icon: 'C++' },
  { name: 'HTML/CSS', icon: 'HTML' },
  { name: 'React', icon: '⚛️' },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onSelectLanguage,
}) => {
  const selected = languages.find((l) => l.name === selectedLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-secondary border-secondary">
          <span className="w-6 h-6 flex items-center justify-center bg-mentor-muted rounded text-xs font-bold">
            {selected.icon}
          </span>
          <span>{selected.name}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.name}
              onClick={() => onSelectLanguage(language.name)}
              className="flex items-center gap-2"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-mentor-muted rounded text-xs font-bold">
                {language.icon}
              </span>
              <span>{language.name}</span>
              {language.name === selectedLanguage && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

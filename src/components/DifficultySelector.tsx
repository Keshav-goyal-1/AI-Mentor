
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

const difficultyLevels = [
  { name: 'Beginner', color: 'bg-green-600' },
  { name: 'Intermediate', color: 'bg-yellow-500' },
  { name: 'Advanced', color: 'bg-red-500' },
];

interface DifficultySelectorProps {
  selectedDifficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
}) => {
  const selected = difficultyLevels.find((d) => d.name === selectedDifficulty) || difficultyLevels[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-secondary border-secondary">
          <span className={`w-3 h-3 rounded-full ${selected.color}`}></span>
          <span>{selected.name}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {difficultyLevels.map((difficulty) => (
            <DropdownMenuItem
              key={difficulty.name}
              onClick={() => onSelectDifficulty(difficulty.name)}
              className="flex items-center gap-2"
            >
              <span className={`w-3 h-3 rounded-full ${difficulty.color}`}></span>
              <span>{difficulty.name}</span>
              {difficulty.name === selectedDifficulty && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DifficultySelector;

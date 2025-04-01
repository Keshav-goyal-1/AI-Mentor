
import React from 'react';
import { Button } from '@/components/ui/button';

interface SuggestionChipProps {
  text: string;
  onClick: (text: string) => void;
}

const SuggestionChip: React.FC<SuggestionChipProps> = ({ text, onClick }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onClick(text)}
      className="bg-secondary border-secondary hover:bg-muted hover:text-mentor"
    >
      {text}
    </Button>
  );
};

export default SuggestionChip;


import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type DefinitionTooltipProps = {
  term?: string;
  definition: string;
  children: React.ReactNode;
};

export const DefinitionTooltip: React.FC<DefinitionTooltipProps> = ({ term, definition, children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted cursor-help">
            {children || term}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

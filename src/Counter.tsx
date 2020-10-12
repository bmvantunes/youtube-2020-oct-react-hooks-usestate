import React from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  return (
    <div>
      <h5>
        DESC: {description} - DC: {defaultCount}
      </h5>
    </div>
  );
}

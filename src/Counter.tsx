import React, { useState } from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);

  return (
    <div>
      <h5>
        DESC: {description} - DC: {defaultCount}
      </h5>

      <button
        onClick={() => {
          setTimeout(() => {
            setCount((prev) => prev - 1);
          }, 3000);
        }}
      >
        -
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

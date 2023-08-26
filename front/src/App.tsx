import * as React from 'react';

export const Component = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
};

Component.displayName = 'App';

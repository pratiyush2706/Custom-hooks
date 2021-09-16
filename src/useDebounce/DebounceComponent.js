import React, { useState } from 'react'
import useDebounce from './useDebounce';

export const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert("Api call to be made here"), 1000, [count]);
  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  )
}

"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // const { isLoaded, isSignedIn, user } = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;

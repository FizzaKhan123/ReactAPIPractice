import { useState } from "react";

export const useExampleStates = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");
  return { count, setCount, text, setText };
};

import React from "react";
import { useExampleStates } from "../../hooks/useExampleStates.js";
import { useAppContext } from "../../hooks/AppContext.tsx";

const Home = () => {
  const { text, setText } = useExampleStates();
  const { wage, setWage, work, setWork } = useAppContext();
  const handleText = () => {
    setText("this is home");
  };
  const handleContext = () => {
    setWage("4");
    setWork("Home building");
  };
  return (
    <>
      <div>
        <button onClick={handleText}>Click me</button>
        <p>{text}</p>
      </div>
      <div>
        <button onClick={handleContext}>Click me</button>
        <p>{`${wage}, ${work}`}</p>
      </div>
    </>
  );
};

export default Home;

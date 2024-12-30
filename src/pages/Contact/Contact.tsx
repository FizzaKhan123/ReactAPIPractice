import React from "react";
import { useExampleStates } from "../../hooks/useExampleStates.js";
import { useAppContext } from "../../hooks/AppContext.tsx";

const Contact = () => {
  const { text, setText } = useExampleStates();
  const { wage, setWage, work, setWork } = useAppContext();
  const handleText = () => {
    setText("this is contact");
  };
  const handleContext = () => {
    setWage("6");
    setWork("Contact building");
  };
  return (
    <>
      <div>
        <button onClick={handleText}>Click me</button>
        <p>{text}</p>
      </div>
      <div>
        <button onClick={handleContext}>Click Contex</button>
        <p>{`${wage}, ${work}`}</p>
      </div>
    </>
  );
};

export default Contact;

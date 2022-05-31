import React, { useRef, useEffect } from "react";
import KeyboardComponent from "./KeyboardComponent";

const Contact = () => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    console.log("keyboardRef", keyboardRef);
  }, []);

  return (
    <div>
      <h2>Contact</h2>
      <KeyboardComponent
        keyboardRef={keyboardRef}
        inputNames={["email", "message"]}
      />
    </div>
  );
};
export default Contact;

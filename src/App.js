import React, { useState } from "react";
import "./App.css";

function AdviceCard() {
  const [currentAdvice, setCurrentAdvice] = useState({
    id: 79,
    advice: "Just because you are offended, doesn't mean you are right.",
  });

  const handleAdviceChange = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setCurrentAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <p>{`Advice #${currentAdvice.id}`}</p>
      <h1>{currentAdvice.advice}</h1>
      <button onClick={handleAdviceChange}>
        <span class="material-symbols-outlined">casino</span>
      </button>
    </div>
  );
}

export default AdviceCard;

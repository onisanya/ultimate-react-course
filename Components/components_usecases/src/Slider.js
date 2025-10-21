import { useState, useReducer } from "react";

export default function Slider(min = 0, max = 5) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-container">
      <div className="slider">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={currentIndex}
          onChange={(e) => setCurrentIndex(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

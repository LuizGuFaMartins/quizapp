import React from "react";
import "./radio.css";

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <div className="container_question">
      <p className="question_title">{pergunta}</p>
      {options.map((option) => (
        <div key={option} className="conteiner_option">
          <div key={option} className="box_option">
            <label className="input_option">
              <input
                type="radio"
                id={id}
                checked={value === option}
                value={option}
                onChange={onChange}
              />
              {option}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Radio;

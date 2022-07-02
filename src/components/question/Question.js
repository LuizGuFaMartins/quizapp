import React from "react";
import Radio from "../radio/Radio";
import "./question.css";

import { Link } from "react-router-dom";

const Question = () => {
  const [perguntas, setPerguntas] = React.useState([]);
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3333/questions")
      .then((response) => response.json())
      .then((response) => setPerguntas(response));
  }, []);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  function handleResetClick() {
    setSlide(0);
    setResultado(null);
  }

  return (
    <div className="container_form">
      <form onSubmit={(event) => event.preventDefault()} className="form">
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}

        {resultado ? (
          <div className="result_box">
            <p>{resultado}</p>{" "}
            <button className="button reset_button" onClick={handleResetClick}>
              Reiniciar
            </button>{" "}
            <Link to="/">
              <button className="button next_button" onClick={handleClick}>
                Início
              </button>
            </Link>
          </div>
        ) : (
          <div className="buttons_box">           
            <button className="button next_button" onClick={handleClick}>
              Próxima
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Question;

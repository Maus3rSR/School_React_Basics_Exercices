import { useState } from "react";

function Boite(props) {
  return <div className="boite" style={{ backgroundColor: props.color }}></div>;
}

function Bouton(props) {
  const classBtn = `btn btn-${props.type}`;

  return (
    <button className={classBtn} onClick={props.onClick}>
      🪄 {props.texte}
    </button>
  );
}

function Exercice4() {
  const [colorB1, setColorB1] = useState("");
  const [colorB2, setColorB2] = useState("");
  const [colorB3, setColorB3] = useState("");

  return (
    <section id="exercice4" className="my-5">
      <h2>Les boîtes polycouleurs</h2>

      <div className="row">
        <div className="col">
          <Bouton
            type="danger"
            texte="Change la première boîte en rouge"
            onClick={() => {
              setColorB1("red");
            }}
          />
        </div>
        <div className="col">
          <Bouton
            type="primary"
            texte="Change les 2 premieres boîtes en bleu"
            onClick={() => {
              setColorB1("blue");
              setColorB2("blue");
            }}
          />
        </div>
        <div className="col">
          <Bouton
            type="success"
            texte="Change toutes les boîtes en vert"
            onClick={() => {
              setColorB1("green");
              setColorB2("green");
              setColorB3("green");
            }}
          />
        </div>
      </div>

      <div className="row mt-5 gap-5">
        <Boite color={colorB1} />
        <Boite color={colorB2} />
        <Boite color={colorB3} />
      </div>
    </section>
  );
}

/**
 * Une autre façon de faire avec un seul useState
 * Il existe de multiples façons d'arriver au même résultat, selon les besoins,
 * les connaissances qu'on a à notre disposition, et à quel point
 * notre code doit pouvoir être évolutif
 */
function Exercice4_Version2() {
  const [colorPerBox, updateColorPerBox] = useState(["", "", ""]);

  return (
    <section id="exercice4" className="my-5">
      <h2>Les boîtes polycouleurs</h2>

      <div className="row">
        <div className="col">
          <Bouton
            type="danger"
            texte="Change la première boîte en rouge"
            onClick={() =>
              updateColorPerBox(["red", colorPerBox[1], colorPerBox[2]])
            }
          />
        </div>
        <div className="col">
          <Bouton
            type="primary"
            texte="Change les 2 premieres boîtes en bleu"
            onClick={() => updateColorPerBox(["blue", "blue", colorPerBox[2]])}
          />
        </div>
        <div className="col">
          <Bouton
            type="success"
            texte="Change toutes les boîtes en vert"
            onClick={() => updateColorPerBox(["green", "green", "green"])}
          />
        </div>
      </div>

      <div className="row mt-5 gap-5">
        <Boite color={colorPerBox[0]} />
        <Boite color={colorPerBox[1]} />
        <Boite color={colorPerBox[2]} />
      </div>
    </section>
  );
}

export default Exercice4;

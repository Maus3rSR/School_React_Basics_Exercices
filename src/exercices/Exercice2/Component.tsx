function BoutonAppelArchibald(props) {
  return (
    <button
      className="btn btn-primary"
      onClick={function () {
        props.quandSorcierRepond(
          "🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !"
        );
      }}
    >
      🛎️ Appeler Archibald
    </button>
  );
}

function Exercice2() {
  function afficherMessage(message) {
    alert(message);
  }

  return (
    <section id="exercice2">
      <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
      <BoutonAppelArchibald quandSorcierRepond={afficherMessage} />
    </section>
  );
}

export default Exercice2;

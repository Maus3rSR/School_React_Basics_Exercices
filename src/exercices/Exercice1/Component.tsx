function BienvenueAventurier(props) {
  return (
    <>
      <h1>{props.titre}</h1>
      <p>{props.texte}</p>
    </>
  );
}

function Exercice1() {
  return (
    <section id="exercice1" className="my-5">
      <BienvenueAventurier
        titre="Boutique d'Archibald le Sorcier 🧙‍♂️"
        texte="Bienvenue Aventurier, ici vous pouvez acheter divers objets et potions
        magiques pour vos aventures !"
      />
    </section>
  );
}

export default Exercice1;

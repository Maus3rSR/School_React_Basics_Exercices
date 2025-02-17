# Exercices sur les composants en React

## Installation du projet

- `pnpm install`
- `pnpm run dev` pour lancer le serveur de développement

## Exercices

À chaque finalisation d'exercice, fais un commit avec le titre de l'exercice.\
Cela me permet de faire un suivi de l'avancement par exercice.\
Egalement cela te fais pratiquer GIT, à apprendre -un peu- à faire des commits régulier de ton travail.

### Exercice 0 : Un composant par exercice

**Objectifs** :

- S'exercer à créer des composants, à les importer et à les utiliser

**Résultat attendu** :

- Avoir un dossier `exercices`
- Dans ce dossier, avoir un sous-dossier par exercice nommé "Exercice1", "Exercice2", etc.
- Dans chaque sous-dossier d'exercice, avoir un fichier `Component.tsx` qui sera le composant principal, contenant le template JSX et d'autres composants selon l'exercice.

**Instructions** :

- Créé un dossier `exercices` dans le dossier `src`
- Pour chaque exercice :
  - Créé un dossier `Exercice<NumeroExercice>` dans le dossier `exercices` (`<NumeroExercice>` est à remplacer par le numéro de l'exercice)
  - Créé un fichier `Component.tsx` dans le dossier `Exercice<NumeroExercice>`
  - Modifie le contenu du fichier `Component.tsx` avec le template de l'exercice correspondant dans `App.tsx`
    - Chaque exercice est représenté par une balise `<section id="exercice<NumeroExercice>">` dans `App.tsx`
  - Exporte ton composant
  - Importe le dans `App.tsx`
  - Utilise le composant dans `App.tsx`

Prenons un exemple avec l'exercice n°1 : "Bienvenue à la boutique, aventurier !" :

- Créé un dossier `Exercice1` dans le dossier `exercices`
- Créé un fichier `Component.tsx` dans le dossier `Exercice1`
- Modifie le contenu du fichier `Component.tsx` avec :

```ts
export default function Exercice1() {
  return (
    <section id="exercice1">
      <h1>Boutique d'Archibald le Sorcier 🧙‍♂️</h1>
      <p>
        Bienvenue Aventurier, ici vous pouvez acheter diverses potions pour vos
        aventures !
      </p>
    </section>
  );
}
```

- Utilise le composant dans `App.tsx`

```tsx
  import Exercice1 from "./exercices/Exercice1/Component";

  ...

  function App() {
    return (
      ...
      <Exercice1 />
      ...
    )
  }
```

_**NB** : Ton IDE est capable d'anticiper quel composant tu peux importer. En commençant à taper `<Exerci` dans le code, il te proposera des suggestions d'imports. En appuyant sur la touche entrée, il devrait normalement te faire l'import automatiquement à ta place :)_

### Exercice 1 : Bienvenue à la boutique, aventurier !

**Objectifs** :

- Créer un composant avec des propriétés paramétrables à l'utilisation du composant

**Résultat attendu** :

- Le composant affiche le titre "Boutique d'Archibald le Sorcier 🧙‍♂️" et le texte "Bienvenue Aventurier, ici vous pouvez acheter diverses potions pour vos aventures !"
- Ces textes sont paramétrables, c'est à dire que tu peux modifier le titre et le paragraphe de sous-titre

**Instructions** :

- Dans ton fichier d'exercice, créé un composant `BienvenueAventurier` avec deux propriétés `titre` et `texte`
- Affiche le titre dans la balise `<h1/>`
- Affiche le texte dans la balise `<p/>`

**Rappel** :

- Une propriété s'utilise comme un attribut d'une balise HTML dans le cas d'un composant
- Les propriétés sont accessibles dans le composant depuis le 1er paramètre de ta fonction, accessible soit par notation pointée, soit par destructuration

_Exemple :_

```jsx
function App() {
  return <Voiture marque="Ford" modele="Fiesta" annee={2018} />;
}

// props (nommage arbitraire) est un objet qui contient les clés : marque, modele, annee
// Accès par notation pointée
function Voiture(props) {
  return (
    <ul>
      <li>Marque: {props.marque}</li>
      <li>Modele: {props.modele}</li>
      <li>Année: {props.annee}</li>
    </ul>
  );
}

function Voiture(props) {
  // Affectation par destructuration
  // On extrait dans des constantes les valeurs des clés du même nom
  const { marque, modele, annee } = props;

  return (
    <ul>
      <li>Marque: {marque}</li>
      <li>Modele: {modele}</li>
      <li>Année: {annee}</li>
    </ul>
  );
}

// On peut faire cette destructuration directement au niveau du paramètre
function Voiture({ marque, modele, annee }) {
  return (
    <ul>
      <li>Marque: {marque}</li>
      <li>Modele: {modele}</li>
      <li>Année: {annee}</li>
    </ul>
  );
}
```

### Exercice 2 : Appeler Archibald

**Objectifs** :

- Utiliser un écouteur d'évènement au clic d'un bouton
- Transmettre une information au composant parent avec une fonction de rappel

**Résultat attendu** :

- Au clic sur le bouton, je dois voir l'information "🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !" s'afficher à l'écran

_Exemple d'utilisation :_

```jsx
function Exercice2() {
  return (
    <section id="exercice2">
      <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
      <BoutonAppelArchibald quandSorcierRepond={function (message) {}} />
    </section>
  );
}
```

**Instructions** :

- Dans le fichier d'exercice, créé un composant `BoutonAppelArchibald` qui reprend le template du bouton
- Ajoute un paramètre à la fonction de ton composant
  - Nous décidons que dans les propriétés, nous aurons une clé nommée arbitairement `quandSorcierRepond` qui sera une fonction de rappel à lancer lors du clic
- Ajoute un écouteur d'évènement au clic sur le bouton avec la propriété `onClick`
  - `onClick` attend une fonction (nommée ou anonyme au choix) pour être exécutée
  - Dans cette fonction, éxécute la fonction de rappel `quandSorcierRepond` en passant en argument le message `🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !`
- Utilise le composant `BoutonAppelArchibald` dans le composant de l'exercice comme dans l'exemple d'utilisation
  - Affiche le message à l'écran avec la fonction globale JavaScript `alert()` qui permet d'afficher un message à l'écran

### Exercice 3 : Le miroir de beauté

**Objectifs** :

- Gestion d'un état simple à un composant
- Changer dynamiquement le style d'une balise en fonction de son état

**Résultat attendu** :

- Lorsque tu passes ta souris sur le miroir, tu dois pouvoir voir ton reflet
- Ton reflet disparaît lorsque tu enlèves la souris du miroir

**Instructions** :

- Dans le fichier d'exercice, créé un composant `Miroir` qui reprendre le template à partir de `<div class="card">`
- Défini un état, en utilisant `useState`
  - Cet état sera un booléan pour afficher ou non le reflet
  - Tu nommeras les deux constantes comme tu le souhaites
  - Déclare une constante `styleMiroir` à laquelle on va affecter un objet, soit la valeur `{ opacity: 1 }` soit la valeur `{ opacity: 0 }` en fonction du booléen de l'état
  - Utilise la propriété `style` de la balise `<img />` pour modifier le style en interpolant la constante `styleMiroir`
  - Ajoute desécouteurs d'évènements lié au survol d'un élément avec la souris :
    - `onMouseEnter` pour mettre à jour l'état qu'on souhaite afficher le reflet du miroir
    - `onMouseLeave` pour mettre à jour l'état qu'on souhaite cacher le reflet du miroir

**NB :** `style` est un attribut HTML pour faire du "style CSS inline". Dans React, c'est le même objectif mais au lieu d'une chaine de caractère habituellement utilisé en HTML `<div style="background-color: red; color: blue;">`, la propriété style attend un objet JavaScript.\
Cet objet contient en clé une propriété CSS valide, et la valeur associée à cette propriété.\
L'exemple ici deviendrait `<div style={{ backgroundColor: "red", color: "blue" }}>`. Notez que les clés sont écrit ici en style `camelCase` et non en `kebab-case`.\
**Rappel** : les premières `{ }` est pour l'utilisation d'une expression JavaScript, dans laquelle on "insère" la déclaration d'un objet, qui se déclare aussi avec des `{ }`.

### Exercice 4 : Les boîtes polycouleurs

**Objectifs** :

- Pratiquer ce que l'on a vu dans les exercices précédents

**Résultat attendu** :

- 3 boîtes de couleur grise
- Quand je clique sur le bouton rouge, la première boîte devient rouge
- Quand je clique sur le bouton bleu, les deux premières boîtes deviennent bleu
- Quand je clique sur le bouton vert, toutes les boîtes deviennent vert

**Instructions** :

- Tu ne peux utiliser qu'un seul composant pour faire tes boutons
- Tu ne peux utiliser qu'un seul composant pour faire tes boîtes
- À toi de réfléchir comment tu vas implémenter cet exercice

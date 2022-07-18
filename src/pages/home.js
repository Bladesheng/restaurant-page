import oven from "../assets/icons/oven.svg"
import pizza from "../assets/icons/pizza.svg"
import pizzaPeel from "../assets/icons/pizzaPeel.svg"


function createHome() {

  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("homeWrapper");


  const familyWrapper = document.createElement("div");
  familyWrapper.classList.add("familyWrapper");
  homeWrapper.appendChild(familyWrapper);

  const familyHeading = document.createElement("h2");
  familyHeading.textContent = "Family Tradition";
  familyWrapper.appendChild(familyHeading);

  const familyText = document.createElement("p");
  familyText.textContent = "Welcome to our little Italy in the middle of Liberec! We prepare authentic Neapolitan pizza. Crispy, with a fluffy edge and an uplifting taste. Baked on beech wood in a real Italian oven. Both our pizzas, our pasta and other specialties come from ancient traditional recipes that have been passed down in our family from generation to generation.";
  familyWrapper.appendChild(familyText);


  function createFact(icon, headingText, factText) {
    const fact = document.createElement("div");
    fact.classList.add("fact");

    const img = new Image();
    img.src = icon;
    fact.appendChild(img);

    const heading = document.createElement("h3");
    heading.textContent = headingText;
    fact.appendChild(heading);

    const text = document.createElement("p");
    text.textContent = factText;
    fact.appendChild(text);

    factsWrapper.appendChild(fact);
  }

  const factsWrapper = document.createElement("div");
  factsWrapper.classList.add("factsWrapper");
  homeWrapper.appendChild(factsWrapper);

  const facts = [
    [
      oven,
      "The Secrets of Baking",
      "Big heat and the smell of beech wood - that's what a real Neapolitan pizza tastes like. Heat the oven to 300 °C and serve within a few minutes."
    ],
    [
      pizza,
      "The Flavour of Naples",
      "Our love for pizza and sense of quality is in our blood.   That's why we add a touch of Neapolitan character to the dough. Just like at home under Vesuvius."
    ],
    [
      pizzaPeel,
      "Family Tradition",
      "Our mamma was always happy from the heart when others ate well. We've been cooking for you just like she did for over 20 years."
    ]
  ]

  facts.forEach((fact) => {
    createFact(fact[0], fact[1], fact[2]);
  })


  return homeWrapper;
}

export default createHome;
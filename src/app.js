/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generatorExcuse(who, action, what, when) {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return (
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen]
    );
  }

  let quien = ["The dog", "My grandma", "His turtle", "My bird"];
  let acccion = ["ate", "peed", "crushed", "broke"];
  let que = ["my homework", "the keys", "the car"];
  let cuando = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuseFinal = generatorExcuse(quien, acccion, que, cuando);

  document.querySelector("#excuse").innerHTML = excuseFinal;
};

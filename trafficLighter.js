class Round {
  constructor() {
    this.color = "black";
    this.height = "50px";
    this.width = "50px";
    this.radius = "40px";
    this.className = "rounds";
  }
  makeElement() {
    let $el = document.createElement("div");
    $el.className = this.className;
    $el.style.height = this.height;
    $el.style.width = this.width;
    $el.style.backgroundColor = this.color;
    $el.style.borderRadius = this.radius;
    $el.style.display = "block";
    document.body.append($el);
  }
}

class Lighter extends Round {
  constructor() {
    super();
    this.radius = "5px";
    this.height = "160px";
    this.width = "50px";
    this.color = "gray";
    this.className = "kvadr";
  }
  createLighter() {
    super.makeElement();
  }
}

let a = new Lighter().makeElement();
let b = new Round().makeElement();
let c = new Round().makeElement();
let d = new Round().makeElement();

let lighter = document.querySelector(".kvadr");
lighter.style.display = "flex";
lighter.style.flexDirection = "column";

let allRounds = document.querySelectorAll(".rounds");
allRounds.forEach((i) => lighter.appendChild(i));

class Button {
  constructor() {
    let $el = document.createElement("button");
    $el.innerText = "click me";
    $el.style.marginTop = "10px";
    $el.style.cursor = "pointer";
    document.body.append($el);
  }

  changeColor() {
    setInterval(() => {
      clearTimeout();
      setTimeout(() => {
        allRounds[0].style.backgroundColor = "red";
        setTimeout(() => {
          allRounds[0].style.backgroundColor = "black";
          allRounds[1].style.backgroundColor = "yellow";
          setTimeout(() => {
            allRounds[1].style.backgroundColor = "black";
            allRounds[2].style.backgroundColor = "green";
            setTimeout(() => {
              allRounds[2].style.backgroundColor = "black";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 3000);
  }
  clearInt() {
    console.log(1);
    clearInterval();
  }
}

let btn = new Button();
let btnFn = document.querySelector("button");
let swither;

btnFn.addEventListener("click", () => {
  swither = !swither;
  if (swither) {
    btn.changeColor();
  } else {
    btn.clearInt();
  }
});

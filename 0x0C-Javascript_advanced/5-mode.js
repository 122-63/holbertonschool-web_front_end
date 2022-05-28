function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = color;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = () => changeMode(9, bold, uppercase, pink, green);
  let darkMode = () => changeMode(12, bold, capitalize, black, white);
  let screamMode = () => changeMode(12, normal, lowercase, white, black);

  let p = document.createElement("p");
  p.appendChild(document.createTextNode("Welcome Holberton!"));
  document.body.appendChild(p);

  let btn_spooky = document.createElement("button");
  btn_spooky.innerText = "Spooky";
  btn_spooky.onclick = function () {
    spooky();
  };
  document.body.appendChild(btn_spooky);

  let btn_darkMode = document.createElement("button");
  btn_darkMode.innerText = "Dark mode";
  btn_darkMode.onclick = function () {
    darkMode();
  };
  document.body.appendChild(btn_darkMode);

  let btn_screamMode = document.createElement("button");
  btn_screamMode.innerText = "Scream mode";
  btn_screamMode.onclick = function () {
    screamMode();
  };
  document.body.appendChild(btn_screamMode);
}
main();

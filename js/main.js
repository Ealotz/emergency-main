/**************************** CONST ****************************/

const gaffel1 = document.querySelector("#HotspotGaffel");
const efficiency1 = document.querySelector("#efficiency");
const requirement1 = document.querySelector("#requirement");
const H2 = document.querySelector(".info-text > h2");
const placeHolder = document.querySelector(".placeholder");
const mad1 = document.querySelector("#HotspotMad");
const monster1 = document.querySelector("#HotspotMonster");

/**************************** GAFFEL ****************************/

console.log(gaffel1);

gaffel1.addEventListener("mouseover", mouseOverGaffel);

function mouseOverGaffel() {
  console.log("mouseOverGaffel");
  gaffel1.style.fill = "white";
}

gaffel1.addEventListener("mouseout", mouseOutGaffel);

function mouseOutGaffel() {
  console.log("mouseout");
  gaffel1.style.fill = "red";
}

gaffel1.addEventListener("click", clickGaffel);
function clickGaffel() {
  console.log("click");
  efficiency1.classList.remove("hide");
  efficiency1.classList.add("fadeIn");
  requirement1.classList.remove("hide");
  requirement1.classList.add("fadeIn");

  efficiency1.addEventListener("animationend", cleanup);
  requirement1.addEventListener("animationend", cleanup);

  H2.textContent = "SPIS DEN";
  placeHolder.textContent = "Det er måske ikke det første nogen ville gøre, men tænk over det - hellere den end dig.";

  efficiency1.innerHTML = "<h3>Tænk over det</h3><p>Det er dit hus og det er ikke fordi monsteret betaler husleje alligevel. Så hvis du er modig vil denne ide ihverfald sikre at du aldrig vil skulle bo med et monster igen. </p>";

  requirement1.innerHTML = "<h3>Advarelse</h3><p>Dog er det vigtigt at nævne at denne metode ikke er testet. Der er uklare bivirkninger der følger med og desuden smager den nok ikke godt. Brug derfor kun denne strategi hvis strengt nødvendigt.</p>";
}

/**************************** MAD ****************************/

console.log(mad1);

mad1.addEventListener("mouseover", mouseOverMad);

function mouseOverMad() {
  console.log("mouseOverMad");
  mad1.style.fill = "white";
}

mad1.addEventListener("mouseout", mouseOutMad);

function mouseOutMad() {
  console.log("mouseout");
  mad1.style.fill = "red";
}

mad1.addEventListener("click", clickMad);
function clickMad() {
  console.log("click");
  efficiency1.classList.remove("hide");
  efficiency1.classList.add("fadeIn");
  requirement1.classList.remove("hide");
  requirement1.classList.add("fadeIn");

  efficiency1.addEventListener("animationend", cleanup);
  requirement1.addEventListener("animationend", cleanup);

  H2.textContent = "DEL DIN MAD";
  placeHolder.textContent = "En helt anden metode er bare at acceptere situationen. Det er aldrig for sent at starte fornu og få det bedste ud af det.";

  efficiency1.innerHTML = "<h3>Vær gæstfri</h3><p>Prøv diplomati og tilbyd at dele din aftensmad med monsteret. Sjovt nok sætter disse monstre pris på venlige mennesker og hvem ved, måske kan i have en hyggelig middag sammen. Hvis alt går vel bliver monsteret mæt og i kan tale om hvordan i fremover kan lave regler der kan gøre det nemmere at bo sammen. </p>";

  requirement1.innerHTML = "<h3>Bemærk</h3><p>!HUSK! Lad monsteret spise den sidste bid.</p>";
}

/**************************** MONSTER ****************************/

console.log(monster1);

monster1.addEventListener("mouseover", mouseOverMonster);

function mouseOverMonster() {
  console.log("mouseOverMonster");
  monster1.style.fill = "white";
}

monster1.addEventListener("mouseout", mouseOutMonster);

function mouseOutMonster() {
  console.log("mouseout");
  monster1.style.fill = "red";
}

monster1.addEventListener("click", clickMonster);
function clickMonster() {
  console.log("click");
  efficiency1.classList.remove("hide");
  efficiency1.classList.add("fadeIn");
  requirement1.classList.remove("hide");
  requirement1.classList.add("fadeIn");

  efficiency1.addEventListener("animationend", cleanup);
  requirement1.addEventListener("animationend", cleanup);

  H2.textContent = "KEND DIT MONSTER";
  placeHolder.textContent = "Det er uklart helt præcis hvad dette monster er. De kan genkendes på deres mørk masse, ujævn skikkelse og store skarpe tænder.";

  efficiency1.innerHTML = "<h3>Lær mere om fjenden</h3><p>De kan bedst lide mørke rum og bor derfor som regel i gamle huse med få beboer. Hvis du bor i et gammelt hus alene er det anbefalet altid at have noget lyd tændt og åbne vinduerne hver dag.</p>";

  requirement1.innerHTML = "<h3>Et godt råd</h3><p>Det er også en god ide altid at have en masse gæster ovre. Monstre kan ikke lide for meget larm så hvis du irriterer dem nok vil de sikkert flytte.</p>";

  fadeInElement(document.querySelector(".info-text"));
}

/**************************** ANIMATION ****************************/

function cleanup() {
  console.log("cleanup");
  efficiency1.removeEventListener("animationend", cleanup);
  efficiency1.classList.remove("fadeIn");
  requirement1.classList.remove("fadeIn");
}

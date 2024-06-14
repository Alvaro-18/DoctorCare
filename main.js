window.addEventListener("scroll", onScroll);
const nav = document.getElementById("navigation");

function onScroll() {
  showNavOnScroll();
  showBackToTopButtononOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;
  //const significa constate, usado para criar váriavel, var também pode ser usado só que é obsoleto.
  //O correto é usar let e const para criar váriaveis

  //verificar se a seção passou da linha
  //quais dados vou precisar ?

  //Topo da seção
  const sectionTop = section.offsetTop;
  //altura da seção
  const sectionHeight = section.offsetHeight;

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //informações dos dados e da lógica
  console.log(
    "O topo da seção chegou ou passou da linha ?",
    sectionTopReachOrPassedTargetLine
  );

  //verificar se a base está abaixo da targetLine
  //quais dados vou precisar

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;
  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  console.log("O fundo da seção passou da linha ?", sectionEndPassedTargetLine);

  //limites da seção
  const sectionBoundaires =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  //A exclamação nega o valor do booleano

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  //pesquisa pelo seletor, ele vai pegar como uma string

  menuElement.classList.remove("active");
  if (sectionBoundaires) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  nav.classList.add("scroll")
  console.log(nav.classList);
  // navigation.classList.add('scroll')
  //Esse comando adiciona a class scroll ao id = navigation

  if (scrollY == 0) {
    nav.classList.remove("scroll");
  }
}

function showBackToTopButtononOnScroll() {
  backToTopButton.classList.remove("show");
  //Esse comando adiciona a class scroll ao id = navigation

  if (scrollY > 1300) {
    backToTopButton.classList.add("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about header,
#about .content`);

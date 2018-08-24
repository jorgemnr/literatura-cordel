//Menu hamburguer animação e mostrar NAV
document.getElementById("divMenu").onclick = function () { menu() };
function menu() {
    document.getElementById("menuHamburguer").classList.toggle("ativo");
    document.getElementsByTagName("nav")[0].classList.toggle("ativo");
};

//Menu Capítulos animação
/* document.getElementById("spanCapitulos").onclick = function () { menuCapitulos() };
function menuCapitulos() {
    document.getElementById("subMenuCapitulos").classList.toggle("ativo");
}; */

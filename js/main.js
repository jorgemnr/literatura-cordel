//Menu hamburguer animação e mostrar NAV
document.getElementById("menuHamburguer").onclick = function () { menu() };
function menu() {
    document.getElementById("menuHamburguer").classList.toggle("ativo");
    document.getElementsByTagName("nav")[0].classList.toggle("ativo");
};

// Menu DropDown
document.getElementById("btnLivros").onclick = function () { fncBtnLivros() };
function fncBtnLivros() {
    document.getElementById("btnLivros").classList.toggle("ativo");
    document.getElementById("subMenuLivros").classList.toggle("ativo");
}

// Mostrar botão que volta para o topo
window.onscroll = function () { fncBtnTopo(); };
function fncBtnTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

// Faz rolagem para o topo da pagina suavemente
document.getElementById("btnTopo").onclick = function () { fncTopo() };
function fncTopo() {
    window.scroll({ top: 0, behavior: "smooth" });
}


const link1958 = document.getElementById("campeao");

link1958.addEventListener("click",(evt)=>{
    evt.preventDefault();
    const secaoDestino = document.getElementById("brasil1958");
    const navbarAltura = document.getElementsById("bgNav").offsetHeight;
    const secaoPosicao = secaoDestino.offsetTop - navbarAltura;

    window.scrollTo({
        top: secaoPosicao
    })
})

let servico1 = document.getElementById("servico-1")
let servico2 = document.getElementById("servico-2")
let servico3 = document.getElementById("servico-3")

servico1.addEventListener("mouseover", onHover);
servico2.addEventListener("mouseover", onHover);
servico3.addEventListener("mouseover", onHover);

function onHover() {
    let filhos = this.children
    this.style.backgroundColor = "black"
    filhos[0].style.color = "purple"
    filhos[1].style.color = "pink"
    setTimeout(() => {
        this.style.backgroundColor = "white"
        filhos[0].style.color = "black"
        filhos[1].style.color = "black"
    }, 5000)
}
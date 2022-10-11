function selectItems(section) {
    const cards = document.querySelectorAll(`.${section}`);
    cards.forEach(card => {
    
        card.addEventListener("click", ()=> {
            const selected = document.querySelectorAll(`.${section}`);
            selected.forEach(element => {
                if(element.classList.contains("active")) {
                    element.classList.remove("active")
                } 
            })
            if(card.classList.contains(".active")) {
                card.classList.remove("active")
            } else {
                card.classList.add("active");
            }
            handleButton()
        })
    })
}
 
function handleButton() {
    const actives = document.querySelectorAll(".active");
    const button = document.querySelector(".finish");
    if(actives.length == 3) {
        button.style.backgroundColor = "#32B72F";
        button.disabled = false;
        button.style.cursor = "pointer";
        button.textContent = "Fechar pedido";
    }
}
 
selectItems("food");
selectItems("drink");
selectItems("dessert");

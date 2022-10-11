function selectItems(section) {
    const cards = document.querySelectorAll(`.${section}`);
    let icon = document.createElement("ion-icon")
    icon.name = "checkmark-circle";
    icon.style.color = "#32B72F"
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
                card.append(icon);
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

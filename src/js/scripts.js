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
           
        })
    })
}

selectItems("food");
selectItems("drink");
selectItems("dessert");

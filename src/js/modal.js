const btnModal = document.getElementById("btn-modal")
const btnClose = document.getElementById("btn-close-modal")
const btnWhatsapp = document.getElementById("btn-whatsapp")

const createModalMessage = () => {
    const {cardFood, cardDrink, cardDessert} = getNames();
    const {priceFood, priceDrink, priceDessert} = getPrices();
    const totalprice = totalPrice();

    const divInfo = document.querySelector(".infos-modal");

    const divFood = document.createElement("div");
    const spanNameFood = document.createElement("span");
    spanNameFood.classList.add("name-food");
    spanNameFood.innerText = `${cardFood}`
    const spanPriceFood = document.createElement("span");
    spanPriceFood.innerText = `${priceFood}`

    const divDrink = document.createElement("div");
    const spanNameDrink = document.createElement("span");
    spanNameDrink.classList.add("name-drink");
    spanNameDrink.innerText = `${cardDrink}`
    const spanPriceDrink = document.createElement("span");
    spanPriceDrink.innerText = `${priceDrink}`

    const divDessert = document.createElement("div");
    const spanNameDessert = document.createElement("span");
    spanNameDessert.classList.add("name-dessert");
    spanNameDessert.innerText = `${cardDessert}`
    const spanPriceDessert = document.createElement("span");
    spanPriceDessert.innerText = `${priceDessert}`

    const divTotal = document.createElement("div")
    divTotal.classList.add("total");
    const spanNameTotal = document.createElement("span");
    spanNameTotal.innerText = "TOTAL"
    const spanPriceTotal = document.createElement("span");
    spanPriceTotal.innerText = totalprice;
   
    
    divFood.append(spanNameFood,spanPriceFood);
    divDrink.append(spanNameDrink,spanPriceDrink);
    divDessert.append(spanNameDessert, spanPriceDessert);
    divTotal.append(spanNameTotal, spanPriceTotal);
    divInfo.append(divFood, divDrink, divDessert, divTotal);
}

btnModal.addEventListener("click", () => {
    const container = document.querySelector(".container-modal")
    createModalMessage();
    container.style.display = "flex";
    btnWhatsapp.addEventListener("click", () => {
        const {message,name, address} = createMessage();
        if(name != null && address != null) {
            const url = `https://wa.me/5571988918934?text=${message}`
            window.open(url);
        } else {
            alert("Nome ou endereço inválidos")
        }
    })
})

btnClose.addEventListener("click", () => {
    const modal = document.querySelector(".container-modal")
    modal.style.display = "none";
})
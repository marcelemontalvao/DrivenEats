function createCards(object) {
    const li = document.createElement("li");
    if(object.type == "dishes") {
        li.classList.add("card", "dishes");
    } else if (object.type == "drink") {
        li.classList.add("card", "drink");
    }else {
        li.classList.add("card", "dessert");
    }
    li.setAttribute("data-test", "food-option")
    const img = document.createElement("img")
    img.src = object.image;

    const title = document.createElement("h2");
    title.innerText = object.title;
    title.setAttribute("data-test", "food-title")

    const description = document.createElement("span")
    description.innerText = object.description;

    const price = document.createElement("p")
    price.classList.add("price");
    price.innerText = object.price
    price.setAttribute("data-test", "food-title")
    
    li.append(img,title,description,price);

    return li;
}

function renderCards(array) {
    const ulDishes = document.querySelector(".dishesUl")
    const ulDrink = document.querySelector(".drinkUl")
    const ulDessert = document.querySelector(".dessertUl")

    array.forEach(element => {
        if(element.type == "dishes") {
            ulDishes.append(createCards(element));
        } else if (element.type == "drink") {
            ulDrink.append(createCards(element));
        } else {
            ulDessert.append(createCards(element));
        }
    })
}

function totalPrice(){
    let sum = 0;
    let prices = document.querySelectorAll(".active .price")
    prices.forEach(price => {
        price = price.textContent.toString()
        price = price.split("R$ ",2);
        price = price[1].replace(/[^\d,]+/g,''); 
        price = price.replace(',', '.'); 
        price = parseFloat(price);
        sum += price;
    })
    return sum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function selectItems(section) {
    const cards = document.querySelectorAll(`.${section}`);
    let icon = document.createElement("ion-icon")
    icon.name = "checkmark-circle";
    cards.forEach(card => {

        card.addEventListener("click", ()=> {

            const selected = document.querySelectorAll(`.${section}`);
            selected.forEach(element => {  
                if(element.classList.contains("active") && element != card) {
                    element.classList.remove("active")
                    card.append(icon); 
                    icon.style.color = "transparent"    
                }
            })

            if(card.classList.contains("active")) {
                card.classList.remove("active");
                card.append(icon); 
                icon.style.color = "transparent"    
            } else {
                card.classList.add("active");
                card.append(icon); 
                icon.style.color = "#32B72F"               
            }
            handleButton();
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

function getNames() {
    const cardDishes = document.querySelector(".dishes.active h2").innerText;
    const cardDrink = document.querySelector(".drink.active h2").innerText;
    const cardDessert = document.querySelector(".dessert.active h2").innerText;
    return {cardDishes, cardDrink, cardDessert}
}

function getPrices() {
    const priceDishes = document.querySelector(".dishes.active .price").innerText;
    const priceDrink = document.querySelector(".drink.active .price").innerText;
    const priceDessert = document.querySelector(".dessert.active .price").innerText;
    return {priceDishes, priceDrink, priceDessert}
}

function createMessage() {
    const name = prompt("Qual o seu nome?");
    const address = prompt("Qual o seu endereço?") 
    const total = totalPrice();
    const {cardDishes, cardDrink, cardDessert} = getNames();
    let message = ` 
    Olá, gostaria de fazer o pedido:
    - Prato: ${cardDishes}
    - Bebida: ${cardDrink}
    - Sobremesa: ${cardDessert}
    Total: ${total}

    Nome: ${name}
    Endereço: ${address}
    ` 
    message = encodeURIComponent(message); 
    return {message, name, address};
}

renderCards(products)
selectItems("dishes");
selectItems("drink");
selectItems("dessert");
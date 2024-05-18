document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

const buttons = document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === "BYN") {
        newCurrency = "€";
        coefficient = 0.9;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = (prices[i].getAttribute("data-base-prices") * coefficient).toFixed(1) + " " + newCurrency;
    }
}
 const model=document.getElementsByClassName("model");
const name   =document.getElementsByClassName("name");
const phone=document.getElementsByClassName("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [model,name,phone].forEach((elem) => {
        if(!item.value){
            item.style.display = "red";
            hasError=true;
        }else{
            item.style.display = "";
        }
    });
    if(!hasError) {
        [model, name, phone].forEach((elem) => {
            item.value="";
        });
        alert("Thank you")
    }
}




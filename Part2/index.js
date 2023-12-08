const grabCard = document.querySelector("#grabCard");
const styleAttribute = document.querySelector("#styleAttribute");
console.log(grabCard)
console.log(styleAttribute)

function setCards(){
    const cardName = document.querySelector(`#${styleAttribute.value}`);
    cardName.style.color = grabCard.value;
    console.log(cardName)
}
document.querySelector("#editCard").addEventListener('click', setCards)

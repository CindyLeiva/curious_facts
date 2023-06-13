let factList = [];

function selectFavourites () {
    const curiousFact = document.getElementById('curious-fact');
    const favFact = curiousFact.textContent;
    const newFactLi = document.createElement('li');
    newFactLi.innerHTML = favFact;
    const favouriteFact = document.querySelector('.facts-favourites ul');
    if( factList.includes(newFactLi.innerHTML)) {
        alert('This text already exist')
    }else{
        factList.push(newFactLi.innerHTML)
        favouriteFact.appendChild(newFactLi)
    };
}
document.getElementById('button-favourite').addEventListener('click', selectFavourites);
module.exports = { selectFavourites };
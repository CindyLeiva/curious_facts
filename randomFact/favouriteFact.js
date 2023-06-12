let factList = [];

function selectFavourites () {
    //Llamamos al contenedor del FACT
    const curiousFact = document.getElementById('curious-fact');
    //Aqui asignamos el FACT a la variable FavFact
    const favFact = curiousFact.textContent;
    const newFactLi = document.createElement('li');
    newFactLi.innerHTML = favFact;
    //Aqui llamamos al contenedor de los Fact Favorites
    const favouriteFact = document.querySelector('.facts-favourites ul');
    if( factList.includes(newFactLi.innerHTML)) {
        alert('This message already exist')
    }else{
        factList.push(newFactLi.innerHTML)
        favouriteFact.appendChild(newFactLi)
    };
}
document.getElementById('button-favourite').addEventListener('click', selectFavourites);
module.exports = { selectFavourites };
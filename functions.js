// Container of data
const containerOfData = document.querySelector('.curious-facts')
const containerOfFavourites = document.querySelector('.facts-favourites')

// Buttons
const favouriteButton = document.querySelector('.button-favourite')
const explorerButton = document.querySelector('.button-exploration')

explorerButton.addEventListener('click', function () {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then(json => {
        containerOfData.textContent = json.text;
        return json;
    })
    .catch(error => {
        console.log('Ha ocurrido un error:', error);
    });
});

favouriteButton.addEventListener('click', function () {
  const favouriteFact = containerOfData.textContent;
  if (favouriteFact) {
      const newFactElement = document.createElement('p');
      newFactElement.textContent = favouriteFact;
      containerOfFavourites.appendChild(newFactElement);
  }
});
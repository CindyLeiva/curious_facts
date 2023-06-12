const { selectFavourites } = require('./favoritesFact.js')

// const fetch = require('node-fetch')

describe('test a favoritesFacts', () => {

    it('selectFavourites is a function', () => {
        expect(typeof selectFavourites).toBe('function');
    });


    // it('clicking button-favourite calls selectFavourites', () => {
    //     const button = document.getElementById('button-favourite');
    //     const spy = jest.spyOn(window, 'selectFavourites');
    //     button.click();
    //     expect(spy).toHaveBeenCalled();
    //     spy.mockRestore();
    //   });

      it('clicking button-favourite adds a new fact to the favorites list', () => {
        // Configura el DOM con el elemento h4 de ejemplo
        document.body.innerHTML = 
          `<div id="curious-fact">
            <h4>Facto de ejemplo</h4>
          </div>
          <div class="facts-favourites">
            <ul>

            </ul>
          </div>
          <button id="button-favourite"></button>`
        ;

        // Simula el contenido del elemento h3 al hacer clic en el botón
        const button = document.getElementById('button-favourite');
        button.click();

        // Verifica que se haya agregado un nuevo elemento a la lista de favoritos
        const favoriteList = document.querySelector('.facts-favourites ul');
        expect(favoriteList.children.length).toBe(1);
        expect(favoriteList.children[0].tagName).toBe('li');
        expect(favoriteList.children[0].innerHTML).toBe('Facto de ejemplo');
      });


});
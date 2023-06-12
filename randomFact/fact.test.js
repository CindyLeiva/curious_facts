//const fetch = require('node-fetch');

const { getRandomFact, deleteFact } = require('./getRandomFact.js');

describe('test deleteFact function', () => {
    it('deleteFact is a function', () => {
        expect(typeof deleteFact).toBe('function');
    });

    it('remove a textFact', () => {
        // Simulamos el elemento h4.curious-fact
        document.body.innerHTML = '<h4 class="curious-fact">Facto de ejemplo</h4>';

        // Llamamos a la función deleteFact
        deleteFact();

        // Verificamos que el elemento haya sido removido
        const actualFact = document.querySelector('h4.curious-fact');
        expect(actualFact).toBeNull();
    });

    it('check textContent', () => {
        document.body.innerHTML = '<h4 class="curious-fact">Facto de ejemplo</h4>';

        const actualFact = document.querySelector('h4.curious-fact');
        expect(actualFact.textContent).toEqual('Facto de ejemplo');
    });
});

// describe('test getRandomFact function', () => {
//     it('test', async () => {
//         // Simula la respuesta de la API
//         const mockResponse = { text: 'Example fact' };
//         jest.spyOn(global, 'fetch').mockResolvedValueOnce({
//             json: jest.fn().mockResolvedValueOnce(mockResponse),
//         });

//         // Configura el DOM con un contenedor vacío
//         document.body.innerHTML = '<div id="curious-fact"></div>';

//         // Llama a la función
//         await getRandomFact();

//         // Verifica que se haya agregado un elemento al contenedor
//         const containerFact = document.getElementById('curious-fact');
//         expect(containerFact.children.length).toBe(1);
//         expect(containerFact.children[0].tagName).toBe('h4');
//         expect(containerFact.children[0].textContent).toBe('Example fact');
//     });
// });
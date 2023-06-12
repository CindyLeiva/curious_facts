const {deleteFact} = require('./getRandomFact.js');

describe('test deleteFact function', () => {
    it('deleteFact is a function', () => {
        expect(typeof deleteFact).toBe('function');
    });

    it('remove a textFact', () => {
        document.body.innerHTML = '<h4 class="curious-fact">Facto de ejemplo</h4>';

        deleteFact();

        const actualFact = document.querySelector('h4.curious-fact');
        expect(actualFact).toBeNull();
    });

    it('check textContent', () => {
        document.body.innerHTML = '<h4 class="curious-fact">Facto de ejemplo</h4>';

        const actualFact = document.querySelector('h4.curious-fact');
        expect(actualFact.textContent).toEqual('Facto de ejemplo');
    });
});


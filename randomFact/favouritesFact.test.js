const { selectFavourites } = require('./favouriteFact')


describe('test a favoritesFacts', () => {

    it('selectFavourites is a function', () => {
        expect(typeof selectFavourites).toBe('function');
    });
 });
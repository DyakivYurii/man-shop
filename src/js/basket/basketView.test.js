import BasketView from './basketView';

describe(`BasketView`, () => {
    test(`This class should be defined`, () => {
        expect(BasketView).toBeDefined();
    });
    test(`Check param`, () => {
        const result = new BasketView(`.product__item`, `.basket__list`, `.basket__sum-indicator`, eventEmitter);
        // expect(result).toEqual({
        //     // listItem
        // })
    });
});
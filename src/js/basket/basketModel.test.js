import BasketModel from './basketModel';

describe(`BasketModel`, () => {
    test(`Must be defined`, () => {
        expect(BasketModel).toBeDefined();
    });
    test(`Correct inicialisation`, () => {
        const result = new BasketModel();
        expect(result.storage).toEqual({});
    });
    describe(`<getItemId>`, () => {
        test(`get id from html element`, () => {
            const model = new BasketModel();
            const HTMLElement = document.createElement(`article`);
            HTMLElement.className = "product__item col-sm-4";
            HTMLElement.dataset.id = "ds151234";

            expect(model.getItemId(HTMLElement)).toBe(`ds151234`);
        });
    });
    describe(`<checkItemInStorage>`, () => {
        test(`check does that element is in storage`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };

            expect(model.checkItemInStorage('ds151234')).toBeTruthy();
            expect(model.checkItemInStorage('some5123')).toBeFalsy();
        });
    });
    describe(`<increaseSum>`, () => {
        test(`plus 1 to item sum`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };
            const result = model.increaseSum('ds151234');
            expect(result.count).toBe(2);
        });
    });
    describe(`<reduceSum>`, () => {
        test(`subtract 1 from item sum`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 2
            };
            const result = model.reduceSum('ds151234');
            expect(result.count).toBe(1);
        });
        test(`return false when sum = 0`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };
            const result = model.reduceSum('ds151234');
            expect(result.count).toBeFalsy();
        });
    });
    describe(`<addItemToStorage>`, () => {
        test(`add new item to storage`, () => {
            const model = new BasketModel();
            model.addItemToStorage(`ds151234`);

            const expectingResult = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            } 
            expect(model.storage[`ds151234`]).toEqual(expectingResult);
        });
    });
    describe(`<deleteItemFromStorage>`, () => {
        test(`deleted item from storage`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };
            const result = model.deleteItemFromStorage(`ds151234`);
            expect(model.storage).toEqual({});
            expect(result).toBeTruthy();
        });
    });
    describe(`<getSumElements>`, () => {
        test(`Should return number of element`, () => {
            const model = new BasketModel();
            model.storage[`ds151234`] = {
                'name': `Bag For Man`,
                'srcOfImg': `./img/item-1.jpg`,
                'price': 130,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };
            model.storage[`ds23534`] = {
                'name': `Bag For Woman`,
                'srcOfImg': `./img/item-2.jpg`,
                'price': 150,
                'like': 0,
                'comment': {},
                'hashTag': `#clothes#cool#shoes`,
                'count': 1
            };
            expect(model.getSumElements()).toBe(2);
        });
    });
});
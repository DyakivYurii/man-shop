import ItemModel from './itemModel';
import { initialState } from '../data/data';

describe(`ItemModel`, () => {
    test(`Must be defined`, () => {
        expect(ItemModel).toBeDefined();
    });
    test(`Correct type`, () => {
        const model = new ItemModel();
        expect(model.storage).toEqual(initialState);
    });
    describe(`getInformation`, () => {
        test(`Return information`, () => {
            const model = new ItemModel();
            expect(model.storage).toEqual(initialState);
        });
        test(`Don't change initial element`, () => {
            const model = new ItemModel();
            const freezeState = Object.assign({}, initialState);
            model.storage[`2341`] = {
                'test': `test text`
            };
            expect(initialState).toEqual(freezeState);
        });
    });
});
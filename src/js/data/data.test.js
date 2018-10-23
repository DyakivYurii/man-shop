import { initialState } from './data';

describe(`InitialState`, () => {
    test(`must be defined`, () => {
        expect(initialState).toBeDefined();
    });
    test(`Test properties`, () => {
        const result = initialState[`dsfs2341`];
        expect(result).toEqual({
            'name': expect.any(String),
            'srcOfImg': expect.any(String),
            'price': expect.any(Number),
            'like': expect.any(Number),
            'comment': expect.any(Object),
            'hashTag': expect.any(String)
        });
    });
});
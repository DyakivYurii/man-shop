import EventEmitter from './helper';

describe(`EventEmitter`, () => {
    test(`Defined`, () => {
        const eventEmitter = new EventEmitter();
        expect(eventEmitter).toBeDefined();
    });

    test(`storage must be Object`, () => {
        const eventEmitter = new EventEmitter();
        const result = eventEmitter.events;
        expect(result).toEqual(expect.any(Object));
    });

    test(`storage must be empty Object at first initialisationn`, () => {
        const eventEmitter = new EventEmitter();
        const result = eventEmitter.events;
        expect(result).toEqual({});
    });

    describe(`testing function on`, () => {
        test(`Event not must be <Null> or <Undefined>`, () => {
            const eventEmitter = new EventEmitter();
            eventEmitter.on(`add`);
            expect(eventEmitter.events.add).toEqual([]);
        });
        test(`testing arguments: <String>: [<Function>, <Function>, ...<Function>]`, () => {
            const eventEmitter = new EventEmitter();
            const fakeFun = jest.fn();
            eventEmitter.on(`add`, fakeFun, fakeFun);
            expect(eventEmitter.events).toEqual({"add": [fakeFun, fakeFun]});
            eventEmitter.events.add.forEach((element) => {
                expect(element).toEqual(expect.any(Function));
            });
        });
        test(`Adding some <Function> to array in exist event in <events>`, () => {
            const eventEmitter = new EventEmitter();
            const fakeFun = jest.fn();
            eventEmitter.on(`add`, fakeFun, fakeFun);
            expect(eventEmitter.events).toEqual({"add": [fakeFun, fakeFun]});
            eventEmitter.on(`add`, fakeFun);
            expect(eventEmitter.events).toEqual({"add": [fakeFun, fakeFun, fakeFun]});
        });
    });

    describe(`function <emit>`, () => {
        test(`To be called with rights arguments <String>, <Any arguments>`, () => {
            const eventEmitter = new EventEmitter();
            // expect(eventEmitter.emit).toHaveBeenCalledWith(expect.any());
        });
    });
    /**
     * @param 
     */
});
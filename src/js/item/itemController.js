export default class ItemController {
    constructor(model, view, eventEmitter) {
        this.model = model;
        this.view = view;
        this.eventEmitter = eventEmitter;

        this.view.render(this.model.storage);
    }
}
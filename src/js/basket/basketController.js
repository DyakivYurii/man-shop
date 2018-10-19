export default class BasketController {
    constructor(model, view, eventEmitter) {
        this.model = model;
        this.view = view;
        this.eventEmitter = eventEmitter;

        this.eventEmitter.on(`basketAddItem`, this.setItem.bind(this));
    }

    setItem(item) {
        const id = this.model.getItemId(item);
    }
}
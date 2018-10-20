// import { globallStorage } from '../main';

export default class ItemController {
    constructor(model, view, eventEmitter) {
        this.model = model;
        this.view = view;
        this.eventEmitter = eventEmitter;

        this.view.render(this.model.storage);
        
        this.eventEmitter.on(`Like`, this.wasLiked.bind(this));
    }


    wasLiked(id) {
        console.log(`Id of element =`, id);
    }
}
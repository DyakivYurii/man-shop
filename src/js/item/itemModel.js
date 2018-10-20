import { initialState } from '../data/data';

export default class ItemModel {
    constructor() {
        this.storage = this.getInformation();
    }

    getInformation() {
        return Object.assign({}, initialState);
    }

    sendInformation() {

    }
}
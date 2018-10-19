export default class BasketModel {
    constructor() {
        this.storage = [];
    }

    addItem(element) {
        this.storage.push(element);
    }

    getItemId(item) {
        const id = item.dataset.id;
        return id;
    }

    deleteItem(id) {}

    increaseSum() {}

    reduceSum() {}

}
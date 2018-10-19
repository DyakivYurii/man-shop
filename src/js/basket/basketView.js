/**
 * @constructor
 * @param {String} itemSelector - for finding all item
 * @param {String} selector - for basket
 * @param {Object} eventEmitter - for event system
 */
export default class BasketView {
    constructor(itemSelector, selector, eventEmitter) {
        this.listItem = [...document.querySelectorAll(itemSelector)];
        this.container = document.querySelector(selector);
        this.eventEmitter = eventEmitter;

        this.init();
    }

    getItem() {}

    /**
     * @param {Object} item - get clicked element
     */
    addItem(item) {
        console.log(item);
        this.eventEmitter.emit(`basketAddItem`, item);
    }

    bindButton() {
        const items = this.listItem.splice(0);

        // Bind button for check element which has cliked and send this to basket store
        items.forEach((item) => {
            item.querySelector(`.basket`).addEventListener(`click`, (event) => { 
                event.preventDefault();
                this.addItem(item);
            });
        });
    }

    renderBasket() {
        const markUp = `<h2>Basket</h2>`;
        return this.container.innerHTML = markUp;
    }

    renderBasketItem(item) {
        const markUp = `item`;
    }

    init() {
        this.renderBasket();
        this.bindButton();
    }
}
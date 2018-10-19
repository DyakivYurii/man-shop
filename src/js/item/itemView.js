/**
 * @constructor
 * @param {Strind} selector - get were must render an item
 * @param {Object} eventEmitter - EventEmitter for creating event system
 */
export default class ItemView {
    constructor(selector, eventEmitter) {
        this.container = document.querySelector(selector);
        this.eventEmitter = eventEmitter;
    }

    bindButton() {
        const items = [...this.container.querySelectorAll(`.item`)];
        console.log(items);
        items.forEach((item) => {
            item.querySelector(`.like-button`).addEventListener(`click`, (event) => { 
                event.preventDefault();
                this.checkLike(item)
            });
        });
    }

    checkLike(item) {
        event.preventDefault();
        // this.eventEmitter.emit(`Like`, 3);
    }
    /**
     * Render all items which get from Model
     * @param  {Array} items - list of all item which should be render
     */
    render(items) {
        items.forEach((item) => {
            const markup = `
            <article class="item" data-id="${item.id}">
                <h2 data-id="${item.id}">${item.name}</h2>
                <button class="like-button" type="button">Like</button>
                <button class="basket" type="button">Add to card</button>
            </article>`;
            this.container.insertAdjacentHTML('beforeend', markup);
        });
        this.bindButton();
    }
}
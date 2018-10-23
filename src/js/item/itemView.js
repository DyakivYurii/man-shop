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

    /**
     * Render all items which get from Model
     * @param {Array} items - list of all item which should be render
     */
    render(items) {
        Object.entries(items).forEach(([id, item]) => {
            const markup = `
            <article class="product__item col-sm-4" data-id="${id}">
                <div class="product__wrapper">
                    <img class="product__img" src="${item.srcOfImg}" alt="image of product">
                    <div class="product__info">
                        <h3 class="product__name">${item.name}</h3>
                        <p class="product__like"></p>
                        <p class="product__price">$${item.price}</p>
                    </div>
                    <button class="like-button" type="button">Like</button>
                    <button class="basket" type="button">Add to card</button>
                </div>
            </article>`;
            this.container.insertAdjacentHTML('beforeend', markup);
        });
    }
}
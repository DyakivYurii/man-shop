import { initialState } from '../data/data';

/**
 * @constructor
 * @param {String} itemSelector - for finding all item
 * @param {String} selector - for basket
 * @param {Object} eventEmitter - for event system
 */
export default class BasketView {
    constructor(itemSelector, basketSelector, countSelector, eventEmitter) {
        // Should change only to render element in screen, not at all in storage
        this.listItem = [...document.querySelectorAll(itemSelector)];
        this.basketContainer = document.querySelector(basketSelector);
        this.countBasketContainer = document.querySelector(countSelector);
        this.eventEmitter = eventEmitter;

        this._bindButton();
    }

    /**
     * @param {Object} item - get clicked element
     */
    addItemBasket(item) {
        this.eventEmitter.emit(`basketAddItem`, item);
    }

    _bindButton() {
        const items = this.listItem.splice(0);

        // Bind button for check element which has cliked and send this to basket store
        items.forEach((item) => {
            item.querySelector(`.basket`).addEventListener(`click`, (event) => { 
                event.preventDefault();
                this.addItemBasket(item);
            });
        });
    }

    bindBasketIncerase(id) {
        const element = this.basketContainer.querySelector(`[data-number="${id}"]`);
        const icrease = element.querySelector(`.basket__increase`);
        const reduce = element.querySelector(`.basket__reduce`);
        const deleteButton = element.querySelector(`.basket__delete`);

        icrease.addEventListener(`click`, (event) => {
            event.preventDefault();
            this.eventEmitter.emit(`basketIncrease`, id, element);
        });
        reduce.addEventListener(`click`, (event) => {
            event.preventDefault();
            this.eventEmitter.emit(`basketReduce`, id, element);
        });
        deleteButton.addEventListener(`click`, (event) => {
            event.preventDefault();
            this.eventEmitter.emit(`basketDelete`, id, element);
        });
    }

    /**
     * Change number indicator in basket
     * @param {Number} productsCount - number of product in basket
     */
    renderChangeBasketState(productsCount) {
        console.log(`This product count =`, productsCount);
        if(productsCount > 0) {
            if(this.countBasketContainer.classList.contains(`visual-hidden`)) {
                this.countBasketContainer.classList.remove(`visual-hidden`);
            }
            return this.countBasketContainer.textContent = productsCount;
        } else {
            if(!this.countBasketContainer.classList.contains(`visual-hidden`)) {
                this.countBasketContainer.classList.add(`visual-hidden`);
                return this.countBasketContainer.textContent = 0;
            }
        }
    }

    /**
     * Render item in basket
     * @param {Object} item - info about item which must be render
     */
    renderBasketItem(id, item) {
        const markUp = `
        <article class="basket__item" data-number="${id}">
            <h2>${item.name}</h2>
            <p class="basket__count">Sum of this product: ${item.count}</p>
            <p>Sum of element: ${item.price}</p>
            <button class="basket__increase" type="button">+</button>
            <button class="basket__reduce" type="button">-</button>
            <button class="basket__delete" type="button">Delete</button>
        </article>`;
        return this.basketContainer.insertAdjacentHTML(`beforeend`, markUp);
    }

    renderCount(id, HTMLelement) {
        const markUp = HTMLelement.querySelector(`.basket__count`);
        return markUp.textContent = `Sum of this product: ${id.count}`;
    }

    deleteRenderedElement(HTMLelement) {
        return this.basketContainer.removeChild(HTMLelement);
    }
}
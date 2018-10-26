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
            <article class="product__item col-sm-6 col-md-6 col-lg-4" data-id="${id}">
                <div class="product__wrapper">
                    <picture>
                        <source media="(min-width: 1200px)" srcset="${item.srcOfImg[`x1-xl`]}, ${item.srcOfImg[`x2-xl`]}">
                        <source media="(min-width: 992px)" srcset="${item.srcOfImg[`x1-lg`]}, ${item.srcOfImg[`x2-lg`]}">
                        <source media="(min-width: 768px)" srcset="${item.srcOfImg[`x1-md`]}, ${item.srcOfImg[`x2-md`]}">
                        <source media="(min-width: 576px)" srcset="${item.srcOfImg[`x1-sm`]}, ${item.srcOfImg[`x2-sm`]}">
                        <img class="product__img" src="${item.srcOfImg[`x1-xs`]}" srcset="${item.srcOfImg[`x2-xs`]}" alt="item image">
                    </picture>
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
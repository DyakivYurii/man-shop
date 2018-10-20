import { initialState } from '../data/data';

/**
 * @constructor
 */
export default class BasketModel {
    constructor() {
        this.storage = {};
    }

    /**
     * Get id of element from clicked button
     * @param {Object} item - all item were was click
     */
    getItemId(item) {
        const id = item.dataset.id;
        return id;
    }

    /**
     * Check if that element alrealdy is on basket or not
     * @param {String} id - id of element
     */
    checkItemInStorage(id) {
        return (id in this.storage) ? true : false;
    }

    /**
     * Add item to basket
     * @param {String} id - This is id of the element
     * Return element for render
     */
    addItemToStorage(id) {
        this.storage[id] = initialState[id];
        this.storage[id].count = 1;
        return this.storage[id];
    }

    /**
     * Delete element from basket
     * @param {String} id - id of the element
     */
    deleteItemFromStorage(id) {
        delete this.storage[id];
        return true;
    }

    /**
     * Increasing number of this product
     * @param {String} id - id of the element
     */
    increaseSum(id) {
        this.storage[id].count++;
        return this.storage[id];
    }

    /**
     * Reduce number of this element
     * If number is == 1 program will delete item from storage
     * @param {String} id 0 id of the element
     */
    reduceSum(id) {
        if(this.storage[id].count > 1) {
            this.storage[id].count--;
            return this.storage[id];
        }
        return false;
    }
}
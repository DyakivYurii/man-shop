import EventEmitter from './helper';

import ItemModel from './item/itemModel';
import ItemView from './item/itemView';
import ItemController from './item/itemController';

import BasketModel from './basket/basketModel';
import BasketView from './basket/basketView';
import BasketController from './basket/basketController';
import { initialState } from './data/data';

const eventEmitter = new EventEmitter();


const array = Object.entries(initialState).forEach(([id, object]) => {
    return { id, object };
});

const itemModel = new ItemModel();
const itemView = new ItemView(`#app`, eventEmitter);
const itemController = new ItemController(itemModel, itemView, eventEmitter);

const basketModel = new BasketModel();
const basketView = new BasketView(`#app > .item`, `.basket`, `.basket__numbers`, eventEmitter);
const basketController = new BasketController(basketModel, basketView, eventEmitter);

const element = document.querySelector(`.item`);

element.textContent
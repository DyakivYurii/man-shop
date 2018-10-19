import EventEmitter from './helper';

import ItemModel from './item/itemModel';
import ItemView from './item/itemView';
import ItemController from './item/itemController';

import BasketModel from './basket/basketModel';
import BasketView from './basket/basketView';
import BasketController from './basket/basketController';

const eventEmitter = new EventEmitter();

export const globalStorage = {
};

console.log(globallStorage);

const itemModel = new ItemModel();
const itemView = new ItemView(`#app`, eventEmitter);
const itemController = new ItemController(itemModel, itemView, eventEmitter);

const basketModel = new BasketModel();
const basketView = new BasketView(`#app > .item`, `.basket`, eventEmitter);
const basketController = new BasketController(basketModel, basketView, eventEmitter);
// console.log(basketView);
import EventEmitter from './helper';

import ItemModel from './item/itemModel';
import ItemView from './item/itemView';
import ItemController from './item/itemController';

import BasketModel from './basket/basketModel';
import BasketView from './basket/basketView';
import BasketController from './basket/basketController';

const eventEmitter = new EventEmitter();

const itemModel = new ItemModel();
const itemView = new ItemView(`#app .product > .row`, eventEmitter);
const itemController = new ItemController(itemModel, itemView, eventEmitter);

const basketModel = new BasketModel();
const basketView = new BasketView(`.product__item`, `.basket__list`, `.basket__sum-indicator`, eventEmitter);
const basketController = new BasketController(basketModel, basketView, eventEmitter);
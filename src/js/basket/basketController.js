export default class BasketController {
	constructor(model, view, eventEmitter) {
		this.model = model;
		this.view = view;
		this.eventEmitter = eventEmitter;

		this.eventEmitter.on(`basketAddItem`, this.setItem.bind(this));
		this.eventEmitter.on(`basketIncrease`, this.increaseItem.bind(this));
		this.eventEmitter.on(`basketReduce`, this.reduceItem.bind(this));
		this.eventEmitter.on(`basketDelete`, this.deleteItem.bind(this));
	}
    
	setItem(item) {
		const id = this.model.getItemId(item)
		const check = this.model.checkItemInStorage(id);
		if (check) {
			this.model.increaseSum(id);
		} else {
			const element = this.model.addItemToStorage(id);
			this.view.renderBasketItem(id, element);
			this.view.bindBasketIncerase(id);			
		}
		return id;
	}

	increaseItem(id, HTMLelement) {
		const info = this.model.increaseSum(id);
		this.view.renderCount(info, HTMLelement);
	}

	reduceItem(id, HTMLelement) {
		const info = this.model.reduceSum(id);
		if(info) {
			this.view.renderCount(info, HTMLelement);
		} else {
			// this.view.blockButton(HTMLelement);
		}
	}

	deleteItem(id, HTMLelement) {
		this.model.deleteItemFromStorage(id);
		console.log(this.view.deleteRenderedElement(HTMLelement));
	}
}
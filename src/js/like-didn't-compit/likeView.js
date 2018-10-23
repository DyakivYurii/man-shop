export default class LikeView {
    constructor(selector, eventEmitter) {
        this.container = document.querySelector(selector);
        this.eventEmitter = eventEmitter;
    }

    bindButton() {
        const items = [...this.container.querySelectorAll(`.item`)];
        items.forEach((item) => {
            item.querySelector(`.like-button`).addEventListener(`click`, (event) => { 
                event.preventDefault();
                this.checkLike(item);
            });
        });
    }

    checkLike(item) {
        event.preventDefault();
        // this.eventEmitter.emit(`Like`, 3);
    }
}
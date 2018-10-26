export default class Menu {
    constructor(menuSelector, toggle) {
        this.menu = document.querySelector(menuSelector);
        this.toggle = document.querySelector(toggle);

        this.initialisation();
    }

    initialisation() {
        if(this.toggle.classList.contains(`main-navigation__burger--no-js`)) {
            this.toggle.classList.remove(`main-navigation__burger--no-js`);
        }
        if(this.menu.classList.contains(`main-navigation__site-list--no-js`)) {
            this.menu.classList.remove(`main-navigation__site-list--no-js`);
        }
        this.toggle.addEventListener(`click`, () => {
            console.log(`was click`);
            if(this.toggle.classList.contains(`main-navigation__burger--closed`)) {
                this.toggle.classList.remove(`main-navigation__burger--closed`);
                this.toggle.classList.add(`main-navigation__burger--opened`);
                this.menu.classList.remove(`main-navigation__site-list--closed`);
                this.menu.classList.add(`main-navigation__site-list--opened`);
            } else if(this.toggle.classList.contains(`main-navigation__burger--opened`)) {
                this.toggle.classList.remove(`main-navigation__burger--opened`);
                this.toggle.classList.add(`main-navigation__burger--closed`);
                this.menu.classList.remove(`main-navigation__site-list--opened`);
                this.menu.classList.add(`main-navigation__site-list--closed`);
            }
        }); 
    }
}
export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} event - name of event
     * @param  {...function} callback - list of functions which will be starting when pubmisher will had done
     */
    on(event, ...callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(...callback);
    }

    /**
     * @param {string} event - name fo event
     * @param  {...any} arg - arguments which use in function
     */
    emit(event, ...arg) {
        if(this.events[event]) {
            this.events[event].forEach(element => {
                element(...arg);
            });
        }
    }
}
export class Section {
    constructor(renderer, container) {
        this._renderer = renderer;
        this._container = container;
    }

    addItem(element) {
        this._container.prepend(element)
    }

    rendereItems(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }
}
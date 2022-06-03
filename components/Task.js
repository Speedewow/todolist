export class Task {
    constructor(item, selector) {
        this._item = item;
        this._selector = selector;
    }

    _getTemplate() {
        const element = document
            .querySelector(this._selector)
            .content
            .querySelector(".task")
            .cloneNode(true)
        return element
    }

    _completeTask() {

    }

    _editTask() {

    }

    _deleteTask() {
        this._element.remove()
    }

    _setEventListeners() {
        this._editButton.addEventListener("click", () => {
            this._editTask()
        })
        this._completeButton.addEventListener("click", () => {
            this._completeTask()
        })
        this._deleteButton.addEventListener("click", () => {
            this._deleteTask()
        })

    }

    createTask() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._text = this.element.querySelector(".task").value;
        this._editButton = this.element.querySelector(".edit-button");
        this._completeButton = this.element.querySelector(".complete-button");
        this._deleteButton = this.element.querySelector(".delete-button");
        return this._element;
    }
}
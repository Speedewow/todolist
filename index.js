// import { Section } from "./components/Section";
// import { Task } from "./components/Task";
// import { Form } from "./components/Form";

class Section {
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

class Task {
    constructor(item, selector) {
        this._item = item;
        this._selector = selector;
    }

    _getTemplate() {
        const taskElement = document
            .querySelector(".task-template")
            .content
            .querySelector(".element")
            .cloneNode(true)
        return taskElement
    }

    _completeTask() {
        this._element.classList.toggle("input_confrim")
    }

    _editTask() {

    }

    _deleteTask() {
        this._element.remove()
    }

    _setEventListeners() {
        this._element.querySelector(".edit-button").addEventListener("click", () => {
            this._editTask()
        })
        this._element.querySelector(".complete-button").addEventListener("click", () => {
            this._completeTask()
        })
        this._element.querySelector(".delete-button").addEventListener("click", () => {
            this._deleteTask()
        })

    }

    createTask() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".task").value = this._item.value
        return this._element;
    }
}

class Form {
    constructor(form, handlerSubmit) {
        this._form = form
        this._submit = handlerSubmit
        this._input = this._form.querySelector(".input")
    }

    setEventListener() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submit(this._input)
            this._form.reset()
        })
    }
}

const container = document.querySelector(".horizontal-list")
const template = document.querySelector(".task-template")
const form = document.querySelector(".input-container")


const renderTask = new Section(() => {
    renderTask.addItem()
}, container)

newTask = (item) => {
    const newTask = new Task(item, ".card-template")
    const newElement = newTask.createTask()
    return newElement
}

const createTask = new Form(form, (item) =>
    renderTask.addItem(newTask(item)))
createTask.setEventListener()
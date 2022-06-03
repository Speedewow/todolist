export class Form {
    constructor(form, handlerSubmit) {
        this._form = form
        this._submit = handlerSubmit
        this._input = this._form.querySelector(".input")
    }

    setEventListener() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submit(this._input)
        })
    }
}
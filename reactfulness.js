class State {
    constructor(initialValue) {
        this._value = initialValue
        this._assignee = []
    };
    get assignee() {return this._assignee}
    get value() {return this._value}
    set value(newValue) {
        this._value = newValue
        this._assignee.forEach(assignment => {
            console.log(assignment[0])
            document.querySelectorAll(assignment[0]).forEach(selected => {
                if (assignment[1] == "innerText") {
                    selected.innerText = this._value
                    return 0
                }
                selected.setAttribute(assignment[1], this._value)
            })
        })
    }
    assign = (selector, attribute) => {
        this._assignee.push([selector.toString(), attribute.toString()])
        document.querySelectorAll(selector.toString()).forEach(selected => {
            if (attribute.toString() == "innerText") {
                selected.innerText = this._value
                return 0
            }
            selected.setAttribute(attribute.toString(), this._value)
        })
    };
    revoke = (selector, attribute) => {
        let tmp = this._assignee
        this._assignee = []
        tmp.forEach(selected => {
            if (selected[0] !== selector || selected[1] !== attribute) {this._assignee.push(selected)}})
    };
}

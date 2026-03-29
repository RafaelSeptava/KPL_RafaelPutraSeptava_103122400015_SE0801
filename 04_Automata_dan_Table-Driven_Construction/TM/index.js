const modeDivElement = document.getElementById("mode-div");

class modeState {
    #state

    constructor() {
        this.#state = "light";
    }

    #toggleMode(oldState, newState) {
        const html = document.documentElement;
        const textarea = document.getElementById("editor-kecil");

        html.classList.remove(`${oldState}-mode`);
        textarea.classList.remove(`form-${oldState}-mode`);

        html.classList.add(`${newState}-mode`);
        textarea.classList.add(`form-${newState}-mode`);
    }

    get() {
        return this.#state;
    }

    set(newState) {
        if (newState == this.#state) return;

        const oldState = this.#state;
        this.#state = newState;

        this.#toggleMode(oldState, newState);
    }
}

const mode = new modeState();

modeDivElement.addEventListener("click", (event) => {
    const btnElement = event.target.closest("button");
    if (!btnElement) return;

    mode.set(btnElement.value);
});

const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const LowerCountElement = document.getElementById("hk");
const UpperCountElement = document.getElementById("hb");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("mode-terang");
const buttonDarkElement = document.getElementById("mode-gelap");

function updateCount(text) {
    let lower = 0;
    let upper = 0;

    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            lower++;
        } else if (char >= 'A' && char <= 'Z') {
            upper++;
        }
    }

    charCountElement.textContent = text.length;
    LowerCountElement.textContent = lower;
    UpperCountElement.textContent = upper;
}

editorElement.addEventListener("input", (event) => {
    updateCount(event.target.value);
});

upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCount(editorElement.value);
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCount(editorElement.value);
});

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("mode-terang");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("mode-gelap");
});
const paragraph = document.getElementById("output");

export function renderOutput(text) {
    paragraph.innerHTML = text;
}
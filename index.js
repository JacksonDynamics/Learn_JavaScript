const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let entries = ` ${count} -`;
    saveEl.textContent += entries;
    
    count = 0
    countEl.textContent = count;
}
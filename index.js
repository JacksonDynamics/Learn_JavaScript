const countEl = document.getElementById("count-el")


let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log("the button was clicked")
}
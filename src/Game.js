let cardPosition = 'green';
let observer = null;

export function observe(o) {
    observer = o;
    observer(cardPosition)
}

export function moveCard(color) { 
    cardPosition = color;
    observer(cardPosition)
}
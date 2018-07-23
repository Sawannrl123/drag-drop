function openMenu(elm) {
    console.log();
    elm.parentNode.classList.toggle("open");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("data", ev.target.id);
}

function drop(ev, elm) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("data");
    ev.target.appendChild(document.getElementById(data));
}
window.onload = function() {
    var jsonData;
    readTextFile("data.json", function(data) {
        jsonData = JSON.parse(data);
        jsonData.forEach((element, index) => {
            console.log('In Read File', element);
            var html = '<p>' + element.name + '</p><p>' + element.age + '</p><p>' + element.sex + '</p>';
            document.getElementById('card' + (index + 1)).innerHTML = html;
        });
    });
};

function readTextFile(file, callback) {

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


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
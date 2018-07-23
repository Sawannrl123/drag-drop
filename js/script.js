window.onload = function() {
    var jsonData;
    readTextFile("data.json", function(data) {
        jsonData = JSON.parse(data);
        jsonData.forEach((element, index) => {
            var html = element.name + ', ' + element.age + ', ' + element.sex;
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
    elm.parentNode.classList.toggle("open");
}

function allowDrop(ev) {
    ev.preventDefault();
}

var tempId = '';

function drag(ev) {
    ev.dataTransfer.setData("data", ev.target.id);
    tempId = document.getElementById(ev.target.id).parentNode.id;
}

function drop(ev) {
    console.log(tempId);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("data");
    ev.target.appendChild(document.getElementById(data));

    setTimeout(function() {
        var elmFirst = document.getElementById('outer_card1').getElementsByClassName("dragable");
        var elmSecond = document.getElementById('outer_card3').getElementsByClassName("dragable");
        var text1 = '',
            text2 = '';
        for (var i = 0; i < elmFirst.length; i++) {
            text1 = text1 + elmFirst[i].innerHTML;
        }
        for (var j = 0; j < elmSecond.length; j++) {
            text2 = text2 + elmSecond[j].innerHTML;
        }
        setTimeout(function() {
            if (text1 == text2) {
                var temp = document.getElementById(data);
                ev.target.removeChild(document.getElementById(data));
                document.getElementById(tempId).appendChild(temp);
                alert('Card 1 content and card 3 content could not be same');
            }
        }, 100);
    }, 100);

}
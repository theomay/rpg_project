var ugy = document.getElementById('ugy');
var ero = document.getElementById('ero');
var save = document.getElementById('save');

save.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('POST', '/characters', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(JSON.stringify({
    "ugy": ugy.value,
    "ero": ero.value
  }));
}

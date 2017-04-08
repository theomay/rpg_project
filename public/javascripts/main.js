var ugy = document.getElementById('ugy');
var ero = document.getElementById('ero');
var save = document.getElementById('save');
var deleteButton = document.getElementById('delete');
var characters = document.getElementById('characters');

save.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('POST', '/characters', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  request.onload = function () {
    getCharacters();
  }

  request.send(JSON.stringify({
    "ugy": ugy.value,
    "ero": ero.value
  }));
}

deleteButton.onclick = function () {
  var request = new XMLHttpRequest();
  request.open('DELETE', '/characters', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      getCharacters();
      console.log(data);
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}

function getCharacters() {
  var request = new XMLHttpRequest();
  request.open('GET', '/characters', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      var responseText = "";
      for (var i = 0; i < data.length; i++) {
        responseText += "ID: " + data[i]._id +  ", Ugy: " + data[i].ugy + ", Ero: " + data[i].ero + "<br>";
      }
      characters.innerHTML = responseText;
    } else {
      // We reached our target server, but it returned an error

    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
}

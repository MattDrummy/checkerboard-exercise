// Your JS goes here

var body = document.getElementsByTagName('body')[0];
body.style.boxSizing = 'borderBox';
body.style.margin = '0';
var gameArray = squareGameLocation();

function populateBoard() {
  for (var a = 0; a < 7; a++) {
    var row = document.createElement('section');
    row.style.height = 'auto';
    row.style.display = 'flex';
    for (var i = 0; i < 9; i++) {
      var square = document.createElement('div');

      square.style.width = '100px';
      square.style.height = '100px';
      row.appendChild(square);
    }
    body.appendChild(row);
  }
}


function colorChangeTimer() {
  var squareArray = document.getElementsByTagName('div');
  for (var i = 0; i < squareArray.length; i++) {
    squareArray[i].style.background = randomColorGenerator();
  }
}

function randomColorGenerator() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function prepareGame(gameArray) {
  var squareArray = document.getElementsByTagName('div');
  var winLocation = squareGameLocation();
  for (var i = 0; i < squareArray.length; i++) {
    var text = document.createElement('p');
    text.style.textAlign = 'center';
    text.style.verticalAlign = 'center';
    text.style.fontSize = '2em';
    text.style.display = 'none';
    text.innerText = 'TEST';
    squareArray[i].append(text);
    var textArray = document.getElementsByTagName('p');
    squareArray[i].addEventListener('click', function() {
      this.style.opacity = '1';
      this.childNodes[0].style.display = 'block';
    })
    if (i === winLocation) {
      squareArray[i].childNodes[0].innerText = "YOU WIN!"
    } else {
      squareArray[i].childNodes[0].innerText = "Sorry..."
    }
  }

  for (var i = 0; i < squareArray.length; i++) {
    squareArray[i].addEventListener('mouseover', function() {
      this.style.opacity = '0';
      this.addEventListener('click', function() {
        this.style.width = '200px';
      });
    });
    squareArray[i].addEventListener('mouseout', function() {
      this.style.opacity = '1';
    });

  }
}

function squareGameLocation() {
  return Math.floor(Math.random() * 63);
}

function setWinLocation() {

}
populateBoard(gameArray);
prepareGame();
setInterval(colorChangeTimer, 200)

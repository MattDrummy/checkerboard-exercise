// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (var a = 0; a < 9; a++) {
  var row = document.createElement('section');
  row.style.height = '100px';
  row.style.width = '100%';
  row.style.display = 'flex';
  for (var i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.style.width = '100px';
    if (i % 2 === 0 && a % 2 === 0) {
      square.style.background = 'black';
    } else if (i % 2 !== 0 && a % 2 === 0) {
      square.style.background = 'red';
    } else if (i % 2 === 0 && a % 2 !== 0) {
      square.style.background = 'red';
    } else {
      square.style.background = 'black';
    }
    row.appendChild(square);
  }
  body.appendChild(row);
}

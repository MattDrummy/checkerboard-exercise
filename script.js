// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (var a = 0; a < 7; a++) {
  var row = document.createElement('section');
  row.style.height = '100px';
  row.style.display = 'flex';
  for (var i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%'
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

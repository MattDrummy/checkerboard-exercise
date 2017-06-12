// Your JS goes here
var body = document.getElementsByTagName('body')[0];
body.style.background = 'linear-gradient(#ffbf00, #004509)';
body.style.boxSizing = 'borderBox';
body.style.margin = '0';

for (var a = 0; a < 7; a++) {
  var row = document.createElement('section');
  row.style.height = '11.1%';
  row.style.display = 'flex';
  for (var i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%'
    square.style.opacity = '0.5';
    if (i % 2 === 0 && a % 2 === 0) {
      square.style.background = 'purple';
    } else if (i % 2 !== 0 && a % 2 === 0) {
      square.style.background = 'blue';
    } else if (i % 2 === 0 && a % 2 !== 0) {
      square.style.background = 'blue';
    } else {
      square.style.background = 'purple';
    }
    row.appendChild(square);
  }
  body.appendChild(row);
}

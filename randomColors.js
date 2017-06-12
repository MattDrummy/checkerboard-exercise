// Your JS goes here
var body = document.getElementsByTagName('body')[0];
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
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    square.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    row.appendChild(square);
  }
  body.appendChild(row);
}

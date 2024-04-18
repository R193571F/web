// Assume 'styles' contains your predefined marker styles
var legend = document.getElementById('legend');
for (var style in styles) {
    var name = style.name;
    var icon = style.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
}
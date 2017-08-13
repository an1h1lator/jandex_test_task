var div = document.createElement('div');
div.innerHTML = 'hello world';
document.body.appendChild(div);
var _e = document.body.firstElementChild.cloneNode(true);
console.log(document.body.firstElementChild.nodeValue);
document.body.appendChild(_e);

class Polygon {
    constructor(height = 0, width = 0) {
        this.height = height;
        this.width = width;
    }

    /**
     * return area of polygon
     */
    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(undefined, 10);
(function f(v) { console.log(v.area); }(square));

function Nodes(node, step = 0) {
    if (node.nodeType == 1)
        console.log((function(s) { let p = ''; for (var i = 0; i < s; i++) p += ' '; return p; })(step), node.nodeName, node.nodeValue);
    step++;
    if (!node.hasChildNodes) return;

    let nodes = node.childNodes;

    for (var i = 0; i < nodes.length; i++) Nodes(nodes[i], step);
}

Nodes(document);
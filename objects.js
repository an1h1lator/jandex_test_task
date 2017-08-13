var Foo = function() {
    this.foo = 15;
};
Foo.prototype = {
    method: function() { return this.foo; }
}
var Bar = function() {};
Bar.prototype = new Foo();
Bar.prototype.constructor = Bar;


var FooBar = function() {};
FooBar.prototype.constructor = function(a, b) {
    this.foo = a;
    this.bar = b;

};
let bar = new Bar();
let foo = new Foo();
let fooBar = new FooBar();
/*Arrays*/
(function() {
    if (Array.prototype.push) {
        var a = [];
        a.push(1, 2);
        if (a[0] === 1 && a[1] === 2) {
            // tests passed, safe to use!
            return;
        }
    }

    throw Error(
        "Array#push() is missing/broken!"
    );
})();
/*---------------------------------------*/
var aa = 10,
    /**
     * gggg
     */
    bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log(AA);
/*--------------------------------------*/
function HaveSumValues(values, sum) {
    let haveSum = {};
    for (var i = 0; i < values.length; i++) {
        if (haveSum[values[i]]) {
            return true;
        } else {
            haveSum[sum - values[i]] = true;
        }

    }
    console.log(haveSum);
    return false;
}
console.log(HaveSumValues([1, 2, 3, 4], 8));

var a = [1, 2, 3, 4];
(function(m) { m[0] = 10 })(a);
console.log(a);

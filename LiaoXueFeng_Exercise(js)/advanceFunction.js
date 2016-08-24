//高阶函数实际上就是可以传入function参数的函数
var myArray = ["1", "2", "3", "4"];
console.log(myArray.map(parseInt));
console.log(myArray.map(function(aaa) {
    return parseInt(aaa);
}));
// parseInt is often used with one argument, but takes two.
// The first is an expression and the second is the radix.
// To the callback function, Array.prototype.map passes 3 arguments: 
// the element, the index, the array
// The third argument is ignored by parseInt, but not the second one,
// hence the possible confusion. See the blog post for more details
/*************************************/
var myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myArray1.reduce(function(x, y) {
    return x * y;
}));
console.log(2 * 3 * 4 * 5 * 6 * 7 * 8 * 9);
console.log(myArray1.reduce(function(x, y) {
    return x * 10 + y;
}));

var string2int = function(s) {
    console.log(s.split("").map(function(x) {
        return x / 1
    }).reduce(function(x, y) {
        return x * 10 + y
    }));
}
string2int("1233456")
var normalize = function(s) {
    return s.map(function(s) {
        return s.split("").map(function(elem, index) {
            if (index == 0) {
                return elem.toLocaleUpperCase();
            } else {
                return elem.toLocaleLowerCase();
            }
        }).join("");
    })
}
console.log(normalize(["AdabD", "aDDKS", "ASDSDW"]))



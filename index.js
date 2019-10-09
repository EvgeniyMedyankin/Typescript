"use strict";
console.log(' <-- First Task --> ');
var arr = [1, 345, 34543, 543, 534, 543, 4565, 7, 0];
console.log(' Arr --> ', arr);
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
console.log(' Max --> ', max, ' Min --> ', min);
var a = 0, b = 0;
arr.forEach(function (item, i) {
    if (item === max)
        a = i;
    if (item === min)
        b = i;
});
arr[a] = arr.splice(b, 1, arr[a])[0];
console.log(' New Arr --> ', arr);
console.log(' <-- Second Task --> ');
var arr1 = [1, 345, 34543, 543];
console.log(' Arr 1 --> ', arr1);
var arr2 = arr1.slice();
console.log(' Arr 2 (Copy of Arr 1) --> ', arr2);
console.log(' <-- Third Task --> ');
function Random(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 0; }
    return Math.random() * (max - min) + min;
}
(function (path, time) {
    if (path === void 0) { path = Random(10, 999); }
    if (time === void 0) { time = Random(10, 999); }
    console.log(' Speed --> ', Math.round(path / time) + " \u043A\u043C/\u043C");
}());
console.log(' <-- End Tasks --> ');
//# sourceMappingURL=index.js.map
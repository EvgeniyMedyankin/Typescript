console.log(' <-- First Task --> ');

let arr: number[] = [1, 345, 34543, 543, 534, 543, 4565, 7, 0];
console.log(' Arr --> ', arr);
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(' Max --> ', max, ' Min --> ', min);

let a: number = 0, b: number = 0;
arr.forEach(function (item, i) {
    if (item === max) a = i;
    if (item === min) b = i;
});

arr[a] = arr.splice(b, 1, arr[a])[0];
console.log(' New Arr --> ', arr);

console.log(' <-- Second Task --> ');

let arr1: number[] = [1, 345, 34543, 543];
console.log(' Arr 1 --> ', arr1);
let arr2: number[] = arr1.slice();
console.log(' Arr 2 (Copy of Arr 1) --> ', arr2);

console.log(' <-- Third Task --> ');

function Random(min: number = 0, max: number = 0): number {
    return Math.random() * (max - min) + min;
}

(function (path: number = Random(10, 999), time: number = Random(10, 999)): void {
    console.log(' Speed --> ', `${Math.round(path / time)} км/м`);
}());

console.log(' <-- End Tasks --> ');
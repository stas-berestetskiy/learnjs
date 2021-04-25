'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

const {border, bg} = options.colors; //Деструктуризация обьекта
console.log(border);

// console.log(options.name);

// delete options.name;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length); //выводит массив из ключей в обьекте

const arr = [2, 3, 5, 6, 10];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop(); //removes last element of the arr
// arr.push(15); //add element to the end of the array

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
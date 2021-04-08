// 1) створити функцію яка приймає масив та виводить його

function userName(arr) {
    console.log(arr);
}

userName(['Karina', 'Alex', 'Kira']);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function myFunction() {
    let number = [];
    for (let i = 0; i < 20; i++) {
        number.push(Math.floor(Math.random() * 100));
    }

    userName(number);
}

myFunction();


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


function numbers(age, age2, age3) {
    if (age < age2 && age < age3) {
        console.log(age);
    } else if (age2 < age && age2 < age3) {
        console.log(age2);
    } else {
        console.log(age3);
    }
}

numbers(6, 10, 21);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


function numbers2(one, two, three) {
    if (one > two && one > three) {
        console.log(one);
    } else if (two > one && two > three) {
        console.log(two);
    } else {
        console.log(three);
    }
}

numbers2(13, 54, 19);


// 5) створити функцію яка повертає найбільше число з масиву

function user(userAge) {
    let Max = userAge[0];
    for (let i = 0; i < userAge.length; i++) {
        if (userAge[i] > Max) {
            Max = userAge[i];
        }
    }
    console.log(Max);
}

user([43, 4, 49, 56, 27, 90, 34, 5]);


// 6) створити функцію яка повертає найменьше число з масиву


function user2(userAge2) {
    let Min = userAge2[0];
    for (let i = 0; i < userAge2.length; i++) {
        if (userAge2[i] < Min) {
            Min = userAge2[i];
        }
    }
    console.log(Min);
}

user2([67, 45, 70, 4, 32, 90, 54, 6]);


//
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.


function sum(numberSum) {
    let total = 0;
    for (let i = 0; i < numberSum.length; i++) {
        total += numberSum[i];
    }
    return total;
}

sum([45, 67, 34, 21, 90, 76]);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


function sum2(numberSum2) {
    let sumTotal = 0;
    for (let i = 0; i < numberSum2.length; i++) {
        sumTotal += numberSum2[i];
    }

    return sumTotal / numberSum2.length;
}

sum2([34, 78, 56, 32, 89, 45, 9]);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


function students(sumStudents) {
    let sumStudents2 = [];
    for (let i = 0; i < sumStudents.length; i++) {

        sumStudents2 = sumStudents2.concat(Object.keys(sumStudents[i]));
    }
    // console.log(sumStudents2);
}

students([{name: 'Dima', age: 13}, {model: 'Camry'}]);


//
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


function studentsUser(sumStudentUser) {
    let sumStudentUser2 = [];
    for (let i = 0; i < sumStudentUser.length; i++) {
        sumStudentUser2 = sumStudentUser2.concat(Object.values(sumStudentUser[i]));
    }
    // console.log(sumStudentUser2);
}

studentsUser([{name: 'Dima', age: 13}, {model: 'Camry'}]);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


function arrNumber(arrNumbers2, arrNumbers3) {
    let totalNumbers2 = [];
    for (let i = 0; i < arrNumbers2.length; i++) {
        totalNumbers2[i] = arrNumbers2[i] + arrNumbers3[i];
    }
    console.log(totalNumbers2);
}

arrNumber([1, 2, 3, 4], [2, 3, 4, 5]);


// ============================================================================================


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


function numbersAge() {
    let Min = arguments[0];
    let Max = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < Min) {
            Min = arguments[i];
        }
        if (arguments[i] > Max) {
            Max = arguments[i];
        }
    }

    console.log(Min);
    console.log(Max);
}

numbersAge(45, 18, 34, 5,);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


function userStudents(userStudents2, isKeys) {
    let data = [];
    for (let i = 0; i < userStudents2.length; i++) {
        if (isKeys) {
            data = data.concat(Object.keys(userStudents2[i]));
        } else {
            data = data.concat(Object.values(userStudents2[i]));
        }
    }

    console.log(data);


}

userStudents([{name: 'Dima', age: 13}, {model: 'Camry'}], true);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let array = [9, 8, 0, 4];

function mixedArray(array, i) {
    let first = array[i];

    array[i] = array[i+1];
    array[i+1]=first;
    // console.log(array);
}

mixedArray(array, 1);









//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]




function myFunctionArray(arrayElements) {
    let one = [];
    let two = [];
    for (const item of arrayElements) {
        if (item === 0) {
            one.push(0);
        } else  {
            two.push(item);
        }
    }
    return two.concat(one);
}

console.log(myFunctionArray([1,0,6,0,3]));
console.log(myFunctionArray([0,1,2,3,4]));
console.log(myFunctionArray([0,0,1,0]));








//
// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

name(n1);
name(n2);
name(n3);

function name(names) {
    let str = [];
    let newNames = names.trim().split(' ');

    for (let i = 0; i <= newNames.length; i++) {
        if (newNames[i] !== '') {
            str.push(newNames[i]);
        }
    }


   console.log(str.join(' '));
}








// ******************* НАЗАД В МИНУЛЕ ***********************


// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"


function textElement(text) {
    const userDiv = document.createElement('div');
    userDiv.innerText = text;
    document.body.appendChild(userDiv);
}

textElement('Hello owu');





// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


function textElement2(text2) {
    const htmlElement = document.createElement('h2');
    htmlElement.innerText = text2;
    document.body.appendChild(htmlElement);
}

textElement2('Harry Potter');




// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


const usersAuto = [{
    brand: 'bmv',
    year: 2001,
    status: false,
}, {
    brand: 'toyota',
    year: 2007,
    status: true,

}, {
    brand: 'honda',
    year: 2003,
    status: true,

}, {
    brand: 'mazda',
    year: 2008,
    status: false,

}, {
    brand: 'mercedes',
    year: 2013,
    status: true,

}, {
    brand: 'wolksvagen',
    year: 2019,
    status: false,

}, {
    brand: 'jeep',
    year: 2009,
    status: false,

}, {
    brand: 'audi',
    year: 2017,
    status: true,

}, {
    brand: 'skoda',
    year: 2005,
    status: true,

}, {
    brand: 'lada',
    year: 1997,
    status: false,

}, {
    brand: 'lanus',
    year: 2002,
    status: true,

}];

function myAutoaray(auto, id) {
    const block = document.getElementById(id);
    const ul = document.createElement('ul');
    for (let i = 0; i < auto.length; i++) {
        const user = auto[i];
        const li = document.createElement('li');
        li.innerHTML = `${i} - ${user.brand}`;
        ul.appendChild(li);
    }
    block.appendChild(ul);
}

myAutoaray(usersAuto, 'list');





































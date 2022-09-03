function foo(name, age, sex) {
    console.log(arguments);
}

foo('name', 'age', 'sex')

function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);
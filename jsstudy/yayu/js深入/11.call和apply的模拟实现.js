// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call(foo); // 1
//第一版call
Function.prototype.call2 = function(context) {
        // 首先要获取调用call的函数 用this可以获取
        context.fn = this;
        context.fn();
        delete context.fn;
    }
    // 测试
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
};
bar.call2(foo);
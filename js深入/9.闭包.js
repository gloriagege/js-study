var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();


var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = function() {
        console.log(i);
    };
}

data[0]();
data[1]();
data[2]();
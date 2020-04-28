function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = " ";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = eval(exp);
        document.form.textview.value = result;
        log += exp + ' = ' + result + '\r\n';
    }
}

function pow() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = eval('Math.pow(' + exp + ', 2)');
        document.form.textview.value = result;
        log += exp + '^2 = ' + result + '\r\n';


    }
}

function tg() {
    var exp = document.form.textview.value;
    if (exp) {
        var deg = eval(exp);
        var rad = deg * Math.PI / 180;
        var result = eval('Math.tan(' + rad + ')');
        document.form.textview.value = result;
        log += 'tg ' + exp + ' = ' + result + '\r\n';
    }
}

function sin() {
    var exp = document.form.textview.value;
    if (exp) {
        var deg = eval(exp);
        var rad = deg * Math.PI / 180;
        var result = eval('Math.sin(' + rad + ')');
        document.form.textview.value = result;
        log += 'sin ' + exp + ' = ' + result + '\r\n';
    }
}

function cos() {
    var exp = document.form.textview.value;
    if (exp) {
        var deg = eval(exp);
        var rad = deg * Math.PI / 180;
        var result =  eval('Math.cos(' + rad + ')');
        document.form.textview.value = result;
        log += 'cos ' + exp + ' = ' + result + '\r\n';
    }
}

function ctg() {
    var exp = document.form.textview.value;
    if (exp) {
        var deg = eval(exp);
        var rad = deg * Math.PI / 180;
        var result = 1 / eval('Math.tan(' + rad + ')');
        document.form.textview.value = result;
        log += 'ctg ' + exp + ' = ' + result + '\r\n';

    }
}

function tg_rad() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = eval('Math.tan(' + exp + ')');
        document.form.textview.value = result;
        log += 'tg_rad ' + exp + ' = ' + result + '\r\n';
    }
}

function sin_rad() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = eval('Math.sin(' + exp + ')');
        document.form.textview.value = result;
        log += 'sin_rad ' + exp + ' = ' + result + '\r\n';
    }
}

function cos_rad() {
    var exp = document.form.textview.value;
    if (exp) {
        var result =  eval('Math.cos(' + exp + ')');
        document.form.textview.value = result;
        log += 'cos_rad ' + exp + ' = ' + result + '\r\n';
    }
}

function ctg_rad() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = 1 / eval('Math.tan(' + exp + ')');
        document.form.textview.value = result;
        log += 'ctg_rad ' + exp + ' = ' + result + '\r\n';

    }
}

function factorial() {
    var exp = document.form.textview.value;
    if (exp) {
        var result = 1;
        exp = eval(exp);
        if (Number.isInteger(exp)) {
            for (var i = 1; i <= exp; i++) {
                result *= i;

            }
            document.form.textview.value = result;
            log += exp + '! = ' + result + '\r\n';
        }
    }

}

function history() {
    alert(log);

}

var log = "";

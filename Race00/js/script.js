// calculator

let line_input = document.getElementsByClassName('line-input')[0];
let line_result = document.getElementsByClassName('line-result')[0];

let line_input_bi = document.getElementsByClassName('line-input-bi')[0];
let line_result_bi = document.getElementsByClassName('line-result-bi')[0];

let line_input_hex = document.getElementsByClassName('line-input-hex')[0];
let line_result_hex = document.getElementsByClassName('line-result-hex')[0];

let dec_1;
let dec_2;

let bi_1;
let bi_2;

//========================================@[Hexademical]@========================================

function insert_hex(str) {
    if (line_result_hex.value == 0) {
        line_result_hex.value = "";
    }
    line_result_hex = document.getElementsByClassName('line-result-hex')[0];
    line_result_hex.value += str;
}

function operation_hex(str) {
    let last = !line_input_hex.textContent.slice(-1);
    if (line_result_hex.value == 0) {
        line_result_hex.value = "";
    }
    else if (last !== '+' && last !== '-' && last !== '×' && last !== '÷') {
        line_input_hex.textContent += line_result_hex.value;
        line_input_hex.textContent += str;
        temp = line_result_hex.value;
        dec_1 = parseInt(temp, 16);
        console.log(dec_1)
        line_result_hex.value = "";
    }
}

function clear_hex() {
    line_input_hex.textContent = "";
    line_result_hex.value = "0";
}

function equal_hex() {
    let result = 0;
    temp1 = line_result_hex.value;
    dec_2 = parseInt(temp1, 16);
    if (line_input_hex.textContent.includes('+')) {
        result = dec_1 + dec_2;
        result= result.toString(16);
    }
    if (line_input_hex.textContent.includes('-')) {
        result = dec_1 - dec_2;
        result= result.toString(16);
    }
    if (line_input_hex.textContent.includes('÷')) {
        result = dec_1 / dec_2;
        result= result.toString(16);
    }
    if (line_input_hex.textContent.includes('×')) {
        result = dec_1 * dec_2;
        result= result.toString(16);
    }
    line_input_hex.textContent += line_result_hex.value;
    line_result_hex.value = ""
    line_result_hex.value += result;
    line_input_hex.textContent = "";
}

//========================================@[Binary]@========================================

function equal_bi() {
    let result = 0;
    tempbi = line_result_bi.value;
    bi_2 = parseInt(tempbi, 2);
    if (line_input_bi.textContent.includes('+')) {
        result = bi_1 + bi_2;
        result = result.toString(2);
    }
    if (line_input_bi.textContent.includes('-')) {
        result = bi_1 - bi_2;
        result = result.toString(2);
    }
    if (line_input_bi.textContent.includes('÷')) {
        result = bi_1 / bi_2;
        result = result.toString(2);
    }
    if (line_input_bi.textContent.includes('×')) {
        result = bi_1 * bi_2;
        result = result.toString(2);
    }
    line_input_bi.textContent += line_result_bi.value;
    line_result_bi.value = ""
    line_result_bi.value += result;
    line_input_bi.textContent = "";
}


function operation_bi(str) {
    let last = !line_input_bi.textContent.slice(-1);
    if (line_result_bi.value == 0) {
        line_result_bi.value = "";
    }
    else if (last !== '+' && last !== '-' && last !== '×' && last !== '÷') {
        line_input_bi.textContent += line_result_bi.value;
        line_input_bi.textContent += str;
        temp = line_result_bi.value;
        bi_1 = parseInt(temp, 2);
        console.log(bi_1)
        line_result_bi.value = "";
    }
}

function insertbi(num) {
    if (line_result_bi.value == 0) {
        line_result_bi.value = "";
    }
    line_result_bi = document.getElementsByClassName('line-result-bi')[0];
    line_result_bi.value += num;
}

function clearbinary() {
    line_input_bi.textContent = "";
    line_result_bi.value = "0";
    count = 0;
}

function clean_element() {
    line_result_bi.value = line_result_bi.value.slice(0, -1);
    if (line_result_bi.value == "") {
        line_result_bi.value = "0";
    }
}

//========================================@[Calculator]@========================================

function operation(num) {
    let last = !line_input.textContent.slice(-1);
    if (line_result.value == 0) {
        line_result.value = "";
    }
    else if (last !== '+' && last !== '-' && last !== '×' && last !== '÷') {
        line_input.textContent += line_result.value;
        line_input.textContent += num;
        line_result.value = "";
    }
}

function insert(number) {
    if (line_result.value == 0) {
        line_result.value = "";
    }
    line_result = document.getElementsByClassName('line-result')[0];
    line_result.value += number;
}

function e(value) {
    temp = line_result.value;
    line_result.value = '';
    const e = 2.71828182;
    line_result.value += e;
}

function clean() {
    line_input.textContent = "";
    line_result.value = "0";
    count = 0;
}

function deleteprev() {
    line_result.value = line_result.value.slice(0, -1);
    if (line_result.value == "") {
        line_result.value = "0";
    }
}

function percent() {
    line_result.value = Number(line_result.value) / 100;
}

function toggle() {
    line_result.value = Number(line_result.value) * -1;
}

function equal() {
    line_input.textContent += line_result.value;
    line_result.value = eval(line_input.textContent);
    line_result.value = Number(line_result.value);
    line_input.textContent = "";
}

function memoryrecall() {
    localStorage.setItem("mr", line_result.value);
}

function memoryclear() {
    localStorage.clear();
}

function memoryOpPlus() {
    localStorage.getItem("mr");
    line_result.value = Number(line_result.value) + Number(localStorage.getItem("mr"));
    console.log(typeof (line_result.value))
}

function memoryOpMinus() {
    localStorage.getItem("mr");
    line_result.value = Number(line_result.value) - Number(localStorage.getItem("mr"));
    console.log(typeof (line_result.value))
}

function pi(value) {
    temp = line_result.value;
    line_result.value = '';
    const p_i = 3.14159265;
    line_result.value += p_i;
}

function sqrt(value) {
    temp = line_result.value;
    line_result.value = '';
    t = Math.sqrt(temp)
    line_result.value += t;
}

function factorial(value) {
    temp = line_result.value;
    line_result.value = '';
    let total = 1
    for (let i = 0; i < temp; i++) {
        total = total * (temp - i);
    }
    line_result.value += total;
}

let count = 0;

function insert2(str) {

    for (let i = 0; i < 1; i++) {
        if (line_result.value == 0) {
            line_result.value = "";
        }

        line_result = document.getElementsByClassName('line-result')[0];

        if (str.includes('.')) {
            count++;
        }

        if (line_input.textContent.includes('.')) {
            count = 0;
        }

        if (count <= 1) {
            if (line_result.value.includes('.') && count === 0) {
            } else {
                line_result.value += str;
            }
        }
        console.log(count);
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


//converter length

document.getElementById('inputCm').addEventListener('input', function (conv) {
    var cm = conv.target.value;
    document.getElementById('inputM').value = (cm / 100).toFixed(10);
    document.getElementById('inputKm').value = (cm / 100000).toFixed(10);
});

document.getElementById('inputM').addEventListener('input', function (conv) {
    var meters = conv.target.value;
    document.getElementById('inputCm').value = (meters / 0.01).toFixed(10);
    document.getElementById('inputKm').value = (meters / 1000).toFixed(10);
});

document.getElementById('inputKm').addEventListener('input', function (conv) {
    var km = conv.target.value;
    document.getElementById('inputCm').value = (km * 100000).toFixed(10);
    document.getElementById('inputM').value = (km * 1000).toFixed(10);
});

//converter weight

document.getElementById('inputG').addEventListener('input', function (conv) {
    var gram = conv.target.value;
    document.getElementById('inputKg').value = (gram * 0.001).toFixed(10);
    document.getElementById('inputT').value = (gram * 0.000001).toFixed(10);
});

document.getElementById('inputKg').addEventListener('input', function (conv) {
    var kilogram = conv.target.value;
    document.getElementById('inputG').value = (kilogram * 1000).toFixed(10);
    document.getElementById('inputT').value = (kilogram * 0.001).toFixed(10);
});

document.getElementById('inputT').addEventListener('input', function (conv) {
    var tonn = conv.target.value;
    document.getElementById('inputG').value = (tonn * 1000000).toFixed(10);
    document.getElementById('inputKg').value = (tonn * 1000).toFixed(10);
});


//converter area

document.getElementById('inputCm2').addEventListener('input', function (conv) {
    var cm2 = conv.target.value;
    document.getElementById('inputM2').value = (cm2 * 0.0001).toFixed(10);
    document.getElementById('inputKm2').value = (cm2 * 0.00000000010).toFixed(10);
    document.getElementById('inputHa').value = (cm2 * 0.000000010).toFixed(10);
});

document.getElementById('inputM2').addEventListener('input', function (conv) {
    var meters2 = conv.target.value;
    document.getElementById('inputCm2').value = (meters2 * 10000).toFixed(10);
    document.getElementById('inputKm2').value = (meters2 * 0.0000010).toFixed(10);
    document.getElementById('inputHa').value = (meters2 * 0.0001).toFixed(10);
});

document.getElementById('inputKm2').addEventListener('input', function (conv) {
    var km2 = conv.target.value;
    document.getElementById('inputCm2').value = (km2 * 10000000000).toFixed(10);
    document.getElementById('inputM2').value = (km2 * 1000000).toFixed(10);
    document.getElementById('inputHa').value = (km2 * 100).toFixed(10);
});

document.getElementById('inputHa').addEventListener('input', function (conv) {
    var ha = conv.target.value;
    document.getElementById('inputCm2').value = (ha * 100000000).toFixed(10);
    document.getElementById('inputM2').value = (ha * 10000).toFixed(10);
    document.getElementById('inputKm2').value = (ha * 0.01).toFixed(10);
});

//clears

function clearlength() {
    document.getElementById('inputCm').value = "0";
    document.getElementById('inputM').value = "0";
    document.getElementById('inputKm').value = "0";
}

function clearweight() {
    document.getElementById('inputG').value = "0";
    document.getElementById('inputKg').value = "0";
    document.getElementById('inputT').value = "0";
}

function cleararea() {
    document.getElementById('inputCm2').value = "0";
    document.getElementById('inputM2').value = "0";
    document.getElementById('inputKm2').value = "0";
    document.getElementById('inputHa').value = "0";
}


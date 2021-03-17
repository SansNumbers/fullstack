let res = 1;
while (true) {
    let input = prompt(`Previous result: ${res}. Enter a new number:`);
    
    if (+input) {
        res += (+input);
    }
    else {
        console.error('Invalid number!');
    }

    if (res > 10000) {
        res = 1;
    }
}
